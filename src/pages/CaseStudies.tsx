import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CoverArt from "@/components/CoverArt";
import { caseStudies } from "@/data/caseStudies";

const CaseStudies = () => {
  return (
    <Layout>
      <div className="px-8 md:px-12 py-12 md:py-20">
        <div className="flex items-baseline justify-between mb-12 md:mb-16">
          <h1 className="font-display text-5xl md:text-7xl text-foreground">
            Case <span className="font-display-italic">studies</span>
          </h1>
          <span className="tracked-label text-muted-foreground hidden md:block">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 align-middle" />
            Proof of work
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {caseStudies.map((study) => (
            <article key={study.id} className="group flex flex-col">
              <Link
                to={`/case-studies/${study.slug}`}
                className="relative aspect-[4/3] overflow-hidden border border-border bg-card mb-5 block"
              >
                {study.cover.kind === "image" ? (
                  <img
                    src={study.cover.src}
                    alt={study.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-6 transition-transform duration-700 group-hover:scale-105">
                    <CoverArt shape={study.cover.shape} />
                  </div>
                )}
                <span className="absolute top-3 left-3 tracked-label text-muted-foreground">
                  {study.id}
                </span>
                <span className="absolute top-3 right-3 tracked-label text-accent">
                  {study.status}
                </span>
              </Link>

              <div className="flex items-baseline justify-between mb-2">
                <h2 className="font-display text-2xl md:text-3xl text-foreground">
                  <Link
                    to={`/case-studies/${study.slug}`}
                    className="hover:text-accent transition-colors"
                  >
                    {study.title}
                  </Link>
                </h2>
                <span className="tracked-label text-muted-foreground">{study.year}</span>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {study.tagline}
              </p>

              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-auto">
                {study.sectors.map((sector) => (
                  <span key={sector} className="tracked-label text-muted-foreground">
                    {sector}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudies;
