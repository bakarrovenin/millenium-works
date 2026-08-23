const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/contentful';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
  if (!LOVABLE_API_KEY) {
    return new Response(JSON.stringify({ error: 'LOVABLE_API_KEY is not configured' }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  const CONTENTFUL_API_KEY = Deno.env.get('CONTENTFUL_API_KEY');
  if (!CONTENTFUL_API_KEY) {
    return new Response(JSON.stringify({ error: 'CONTENTFUL_API_KEY is not configured' }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  const spaceId = Deno.env.get('CONTENTFUL_SPACE_ID');
  if (!spaceId) {
    return new Response(JSON.stringify({ error: 'CONTENTFUL_SPACE_ID is not configured' }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const url = new URL(req.url);
    const slug = url.searchParams.get('slug');

    let apiUrl = `${GATEWAY_URL}/spaces/${spaceId}/entries?content_type=caseStudy&order=fields.order&include=2`;
    if (slug) {
      apiUrl += `&fields.slug=${slug}&limit=1`;
    }

    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'X-Connection-Api-Key': CONTENTFUL_API_KEY,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      // If content type doesn't exist yet, return empty list rather than 500
      if (response.status === 400 || response.status === 404) {
        return new Response(JSON.stringify({ caseStudies: [] }), {
          status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      throw new Error(`Contentful API call failed [${response.status}]: ${JSON.stringify(data)}`);
    }

    const assets = data.includes?.Asset || [];
    const assetMap: Record<string, { url: string; title: string }> = {};
    for (const asset of assets) {
      assetMap[asset.sys.id] = {
        url: `https:${asset.fields.file.url}`,
        title: asset.fields.title || '',
      };
    }

    const caseStudies = (data.items || []).map((item: any) => {
      const f = item.fields;
      const coverId = f.coverImage?.sys?.id;
      const galleryIds: string[] = (f.gallery || []).map((g: any) => g.sys?.id).filter(Boolean);

      return {
        id: item.sys.id,
        title: f.title,
        slug: f.slug,
        tagline: f.tagline || '',
        year: f.year || '',
        status: f.status || null,
        tags: f.tags || [],
        order: f.order ?? 0,
        coverImage: coverId ? assetMap[coverId] : null,
        gallery: galleryIds.map((id) => assetMap[id]).filter(Boolean),
        body: f.body || null,
        externalUrl: f.externalUrl || null,
        metrics: f.metrics || null,
      };
    });

    return new Response(JSON.stringify({ caseStudies }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    console.error('Error fetching case studies:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
