import Layout from "@/components/Layout";

const caseStudies = [
  {
    id: "01",
    title: "Trikl (Acquired)",
    description: "Pakistan's first automated savings and investment platform",
    year: "2022",
  },
  {
    id: "02",
    title: "Pryze",
    description: "Gamified betting platform",
    year: "2022",
  },
  {
    id: "03",
    title: "Jiye",
    description: "Vertical agritech platform to optimize and uplift farmer yield",
    year: "2022",
  },
  {
    id: "04",
    title: "notnsfw",
    description: "One curated joke delivered to your inbox every day",
    year: "2022–Present",
  },
  {
    id: "05",
    title: "Alt Find",
    description: "AI-powered applicant tracking system for modern hiring",
    year: "2023",
  },
  {
    id: "06",
    title: "Alt Sprints",
    description: "No-code studio for rapid product development",
    year: "2023",
  },
  {
    id: "07",
    title: "Steve AI",
    description: "Autonomous AI agent for Linear project management",
    year: "2024",
  },
  {
    id: "08",
    title: "Rovenin",
    description: "AI-powered hedge fund with autonomous trading bots",
    year: "2025",
  },
  {
    id: "09",
    title: "AI Avatar",
    description: "Generate culturally localized avatars with AI",
    year: "2025",
  },
  {
    id: "10",
    title: "Islapay",
    description: "Stablecoin-based consumer payments for the Caribbean",
    year: "2025–2026",
  },
];
const CaseStudies = () => {
  return (
    <Layout>
      <div className="px-8 md:px-12 py-12 md:py-20">
        <h1 className="text-2xl md:text-3xl font-medium mb-12 md:mb-16">Case Studies</h1>
        
        <div className="space-y-8 md:space-y-10">
          {caseStudies.map((study) => (
            <div 
              key={study.id}
              className="group block"
            >
              <article>
                <div className="flex items-baseline gap-4 md:gap-6">
                  <span className="text-muted-foreground text-sm font-medium">
                    {study.id}.
                  </span>
                  <div className="flex-1">
                    <h2 className="text-lg md:text-xl font-medium group-hover:opacity-70 transition-opacity">
                      {study.title}
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base mt-1">
                      {study.description}
                    </p>
                  </div>
                  <span className="text-muted-foreground text-sm hidden md:block">
                    {study.year}
                  </span>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudies;
