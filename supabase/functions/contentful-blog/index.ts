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

    let apiUrl = `${GATEWAY_URL}/spaces/${spaceId}/entries?content_type=blogPost&order=-fields.publishedDate&include=1`;
    
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
      throw new Error(`Contentful API call failed [${response.status}]: ${JSON.stringify(data)}`);
    }

    // Resolve includes (assets)
    const assets = data.includes?.Asset || [];
    const assetMap: Record<string, { url: string; title: string }> = {};
    for (const asset of assets) {
      assetMap[asset.sys.id] = {
        url: `https:${asset.fields.file.url}`,
        title: asset.fields.title || '',
      };
    }

    // Transform entries
    const posts = (data.items || []).map((item: any) => {
      const fields = item.fields;
      const featuredImageId = fields.featuredImage?.sys?.id;

      return {
        id: item.sys.id,
        title: fields.title,
        slug: fields.slug,
        body: fields.body,
        excerpt: fields.excerpt || '',
        publishedDate: fields.publishedDate,
        author: fields.author || '',
        featuredImage: featuredImageId ? assetMap[featuredImageId] : null,
      };
    });

    return new Response(JSON.stringify({ posts }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    console.error('Error fetching blog posts:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
