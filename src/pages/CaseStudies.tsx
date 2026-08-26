import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import img01 from "@/assets/case-studies/01-trikl.jpg";
import img02 from "@/assets/case-studies/02-pryze.jpg";
import img03 from "@/assets/case-studies/03-jiye.jpg";
import img04 from "@/assets/case-studies/04-notnsfw.jpg";
import img05 from "@/assets/case-studies/05-altfind.jpg";
import img06 from "@/assets/case-studies/06-altsprints.jpg";
import img07 from "@/assets/case-studies/07-steve.jpg";
import img08 from "@/assets/case-studies/08-rovenin.jpg";
import img09 from "@/assets/case-studies/09-avatar.jpg";
import img10 from "@/assets/case-studies/10-islapay.jpg";
import img11 from "@/assets/case-studies/11-market-tracker.jpg";

type Card = {
  id: string;
  slug?: string;
  title: string;
  status?: string | null;
  description: string;
  year: string;
  tags: string[];
  image: string;
  externalUrl?: string | null;
};

const fallback: Card[] = [
  { id: "01", title: "Trikl", status: "Acquired", description: "Pakistan's first automated savings and investment platform", year: "2022", tags: ["Fintech", "Consumer"], image: img01 },
  { id: "02", title: "Pryze", description: "Gamified betting platform", year: "2022", tags: ["Consumer", "Gaming"], image: img02 },
  { id: "03", title: "Jiye", description: "Vertical agritech platform to optimize and uplift farmer yield", year: "2022", tags: ["Vertical SaaS", "Agritech"], image: img03 },
  { id: "04", title: "notnsfw", description: "One curated joke delivered to your inbox every day", year: "2022—", tags: ["Consumer", "Media"], image: img04 },
  { id: "05", title: "Alt Find", description: "AI-powered applicant tracking system for modern hiring", year: "2023", tags: ["Applied AI", "Enterprise"], image: img05 },
  { id: "06", title: "Alt Sprints", description: "No-code studio for rapid product development", year: "2023", tags: ["Studio", "No-Code"], image: img06 },
  { id: "07", title: "Steve AI", description: "Autonomous AI agent for Linear project management", year: "2024", tags: ["Applied AI", "Agents"], image: img07 },
  { id: "08", title: "Rovenin", description: "AI-powered hedge fund with autonomous trading bots", year: "2025", tags: ["Applied AI", "Fintech"], image: img08 },
  { id: "09", title: "AI Avatar", description: "Generate culturally localized avatars with AI", year: "2025", tags: ["Applied AI", "Consumer"], image: img09 },
  { id: "10", title: "Islapay", description: "Stablecoin-based consumer payments for the Caribbean", year: "2025—2026", tags: ["Fintech", "Consumer"], image: img10 },
  { id: "11", title: "Market Tracker", description: "A lightweight market price tracker built to run on a BlackBerry Passport with live prices for stocks, commodities, indices, and crypto.", year: "2026", tags: ["Fintech", "Tool"], image: img11, externalUrl: "https://github.com/bakarrovenin/stock-tracker" },
];

const fetchCaseStudies = async (): Promise<Card[]> => {
  const res = await fetch(
    `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/contentful-case-studies`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
  if (!res.ok) return [];
  const json = await res.json();
  const items = json.caseStudies || [];
  return items.map((c: any, i: number) => ({
    id: String(i + 1).padStart(2, "0"),
    slug: c.slug,
    title: c.title,
    status: c.status,
    description: c.tagline,
    year: c.year,
    tags: c.tags || [],
    image: c.coverImage?.url || "",
    externalUrl: c.externalUrl,
  }));
};

const CaseStudies = () => {
  const { data } = useQuery({
    queryKey: ["case-studies"],
    queryFn: fetchCaseStudies,
  });

  const caseStudies = data && data.length > 0 ? data : fallback;

  return (
    <Layout>
      <div className="px-8 md:px-12 py-12 md:py-20">
        <div className="flex items-baseline justify-between mb-12 md:mb-16">
          <h1 className="font-display text-5xl md:text-7xl text-foreground">
            Case <span className="font-display-italic">studies</span>
          </h1>
          <span className="tracked-label text-muted-foreground hidden md:block">
            {caseStudies.length} selected
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {caseStudies.map((study) => {
            const TitleEl = study.slug ? (
              <Link to={`/case-studies/${study.slug}`} className="hover:text-accent transition-colors">
                {study.title}
              </Link>
            ) : study.externalUrl ? (
              <a href={study.externalUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                {study.title}
              </a>
            ) : (
              study.title
            );

            return (
              <article key={study.id} className="group flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden border border-border bg-card mb-5">
                  {study.image && (
                    study.externalUrl ? (
                      <a href={study.externalUrl} target="_blank" rel="noopener noreferrer">
                        <img
                          src={study.image}
                          alt={study.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </a>
                    ) : (
                      <img
                        src={study.image}
                        alt={study.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )
                  )}
                  <span className="absolute top-3 left-3 tracked-label text-muted-foreground">
                    {study.id}
                  </span>
                  {study.status && (
                    <span className="absolute top-3 right-3 tracked-label text-accent">
                      {study.status}
                    </span>
                  )}
                </div>

                <div className="flex items-baseline justify-between mb-2">
                  <h2 className="font-display text-2xl md:text-3xl text-foreground">{TitleEl}</h2>
                  <span className="tracked-label text-muted-foreground">{study.year}</span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {study.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tracked-label text-foreground/80 border border-border rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudies;
