import { Link, useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import CoverArt from "@/components/CoverArt";
import { caseStudies, disciplines, type Discipline } from "@/data/caseStudies";

/**
 * The active discipline lives in the query string (?discipline=growth) so a
 * filtered view can be linked to. Anything unrecognised falls back to all.
 */
const parseDiscipline = (value: string | null): Discipline | undefined =>
  disciplines.find((d) => d.toLowerCase() === value?.toLowerCase());

const CaseStudies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const active = parseDiscipline(searchParams.get("discipline"));
  const visible = active ? caseStudies.filter((s) => s.tags.includes(active)) : caseStudies;

  const select = (discipline?: Discipline) =>
    setSearchParams(discipline ? { discipline: discipline.toLowerCase() } : {}, {
      replace: true,
    });

  const filterClass = (on: boolean) =>
    `tracked-label transition-colors ${
      on ? "text-accent" : "text-muted-foreground hover:text-foreground"
    }`;

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

        <div
          role="group"
          aria-label="Filter by discipline"
          className="flex flex-wrap gap-x-6 gap-y-2 mb-10 md:mb-12"
        >
          <button
            type="button"
            aria-pressed={!active}
            onClick={() => select()}
            className={filterClass(!active)}
          >
            All
          </button>
          {disciplines.map((discipline) => (
            <button
              key={discipline}
              type="button"
              aria-pressed={active === discipline}
              onClick={() => select(discipline)}
              className={filterClass(active === discipline)}
            >
              {discipline}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10">
          {visible.map((study) => (
            <article key={study.id} className="group flex flex-col">
              <Link
                to={`/case-studies/${study.slug}`}
                className="relative aspect-[16/10] overflow-hidden border border-border bg-card mb-4 block"
              >
                {study.cover.kind === "image" ? (
                  <img
                    src={study.cover.src}
                    alt={study.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-4 transition-transform duration-700 group-hover:scale-105">
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
                <h2 className="font-display text-xl md:text-2xl text-foreground">
                  <Link
                    to={`/case-studies/${study.slug}`}
                    className="hover:text-accent transition-colors"
                  >
                    {study.title}
                  </Link>
                </h2>
                <span className="tracked-label text-muted-foreground">{study.year}</span>
              </div>

              <p className="text-foreground text-sm leading-relaxed mb-4">
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
