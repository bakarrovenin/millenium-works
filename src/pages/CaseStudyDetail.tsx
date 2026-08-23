import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/Layout";

interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  year: string;
  status: string | null;
  tags: string[];
  coverImage: { url: string; title: string } | null;
  gallery: { url: string; title: string }[];
  body: any;
  externalUrl: string | null;
  metrics: Record<string, string> | null;
}

const fetchCaseStudy = async (slug: string): Promise<CaseStudy | null> => {
  const { data, error } = await supabase.functions.invoke("contentful-case-studies", {
    body: null,
    method: "GET",
    headers: {},
  } as any);
  // Edge function uses query param; use direct fetch instead.
  if (error || !data) {
    const res = await fetch(
      `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/contentful-case-studies?slug=${slug}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (!res.ok) throw new Error("Failed to fetch case study");
    const json = await res.json();
    return json.caseStudies?.[0] ?? null;
  }
  return data.caseStudies?.find((c: CaseStudy) => c.slug === slug) ?? null;
};

const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_n: any, c: any) => (
      <p className="text-foreground/90 text-sm md:text-base leading-relaxed mb-4">{c}</p>
    ),
    [BLOCKS.HEADING_2]: (_n: any, c: any) => (
      <h2 className="font-display text-2xl md:text-3xl mt-10 mb-4">{c}</h2>
    ),
    [BLOCKS.HEADING_3]: (_n: any, c: any) => (
      <h3 className="font-display text-xl md:text-2xl mt-8 mb-3">{c}</h3>
    ),
    [BLOCKS.UL_LIST]: (_n: any, c: any) => (
      <ul className="list-disc list-inside space-y-1 mb-4 text-foreground/90">{c}</ul>
    ),
    [BLOCKS.OL_LIST]: (_n: any, c: any) => (
      <ol className="list-decimal list-inside space-y-1 mb-4 text-foreground/90">{c}</ol>
    ),
    [BLOCKS.QUOTE]: (_n: any, c: any) => (
      <blockquote className="border-l-2 border-muted-foreground pl-4 italic my-4 text-muted-foreground">
        {c}
      </blockquote>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { title, file } = node.data.target.fields;
      return (
        <img src={`https:${file.url}`} alt={title || ""} className="w-full my-8 border border-border" />
      );
    },
    [INLINES.HYPERLINK]: (node: any, c: any) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-accent transition-colors"
      >
        {c}
      </a>
    ),
  },
};

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: study, isLoading, error } = useQuery({
    queryKey: ["case-study", slug],
    queryFn: () => fetchCaseStudy(slug!),
    enabled: !!slug,
  });

  return (
    <Layout>
      <div className="px-8 md:px-12 py-12 md:py-20 max-w-4xl">
        <Link
          to="/case-studies"
          className="text-muted-foreground text-sm hover:text-foreground transition-colors mb-8 inline-block"
        >
          ← Back to Case Studies
        </Link>

        {isLoading && <p className="text-muted-foreground text-sm">Loading…</p>}
        {error && <p className="text-destructive text-sm">Failed to load case study.</p>}
        {!isLoading && !study && (
          <p className="text-muted-foreground text-sm">Case study not found.</p>
        )}

        {study && (
          <article>
            <div className="flex items-baseline gap-4 mb-4 tracked-label text-muted-foreground">
              <span>{study.year}</span>
              {study.status && <span className="text-accent">— {study.status}</span>}
            </div>

            <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4 leading-[1.05]">
              {study.title}
            </h1>

            {study.tagline && (
              <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl">
                {study.tagline}
              </p>
            )}

            {study.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-10">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tracked-label text-foreground/80 border border-border rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {study.coverImage && (
              <img
                src={study.coverImage.url}
                alt={study.coverImage.title || study.title}
                className="w-full mb-10 border border-border"
              />
            )}

            {study.metrics && Object.keys(study.metrics).length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-y border-border py-8 my-10">
                {Object.entries(study.metrics).map(([k, v]) => (
                  <div key={k}>
                    <div className="font-display text-3xl md:text-4xl">{v}</div>
                    <div className="tracked-label text-muted-foreground mt-1">{k}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="prose-minimal">
              {study.body && documentToReactComponents(study.body, richTextOptions)}
            </div>

            {study.gallery?.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {study.gallery.map((img, i) => (
                  <img
                    key={i}
                    src={img.url}
                    alt={img.title}
                    className="w-full border border-border"
                  />
                ))}
              </div>
            )}

            {study.externalUrl && (
              <div className="mt-12 pt-8 border-t border-border">
                <a
                  href={study.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tracked-label text-foreground hover:text-accent transition-colors"
                >
                  View full case study →
                </a>
              </div>
            )}
          </article>
        )}
      </div>
    </Layout>
  );
};

export default CaseStudyDetail;
