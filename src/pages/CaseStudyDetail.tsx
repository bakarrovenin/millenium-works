import { Fragment, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CoverArt from "@/components/CoverArt";
import { caseStudies, type Section } from "@/data/caseStudies";

/** Small gold dot used on every eyebrow label across the site. */
const Dot = () => (
  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 align-middle" />
);

/**
 * Renders body copy, turning [text](href) into links.
 * Hrefs starting with "/" stay in-app; everything else opens in a new tab.
 */
const renderRich = (text: string) => {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return <Fragment key={i}>{part}</Fragment>;
    const [, label, href] = match;
    if (href.startsWith("/")) {
      return (
        <Link key={i} to={href} className="text-accent hover:opacity-70 transition-opacity">
          {label}
        </Link>
      );
    }
    return (
      <a
        key={i}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:opacity-70 transition-opacity"
      >
        {label}
      </a>
    );
  });
};

const SectionRow = ({ section }: { section: Section }) => (
  <section className="grid md:grid-cols-[minmax(0,200px)_1fr] gap-3 md:gap-12 py-8 md:py-10 border-b border-border">
    <h2 className="tracked-label text-muted-foreground md:pt-1">
      <Dot />
      {section.label}
    </h2>
    <div className="max-w-3xl">
      {section.body && (
        <p className="text-foreground text-base md:text-lg leading-relaxed">
          {renderRich(section.body)}
        </p>
      )}
      {section.bullets && (
        <ul className="space-y-3">
          {section.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
              <span
                className={`text-base md:text-lg leading-relaxed ${
                  section.italicBullets
                    ? "font-display-italic text-foreground text-lg md:text-xl"
                    : "text-foreground"
                }`}
              >
                {renderRich(bullet)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </section>
);

const CaseStudyDetail = () => {
  const { slug } = useParams();

  // Prev/next keeps you on the same page component, so reset scroll on change.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const index = caseStudies.findIndex((s) => s.slug === slug);
  const study = index >= 0 ? caseStudies[index] : undefined;

  if (!study) {
    return (
      <Layout>
        <div className="px-8 md:px-12 py-12 md:py-20">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Case study not found
          </h1>
          <Link to="/case-studies" className="tracked-label text-accent hover:opacity-70">
            <Dot />
            Back to case studies
          </Link>
        </div>
      </Layout>
    );
  }

  const prev = index > 0 ? caseStudies[index - 1] : undefined;
  const next = index < caseStudies.length - 1 ? caseStudies[index + 1] : undefined;

  return (
    <Layout>
      <div className="px-8 md:px-12 py-12 md:py-20">
        <div className="flex items-baseline justify-between mb-10 md:mb-12">
          <Link
            to="/case-studies"
            className="tracked-label text-muted-foreground hover:text-foreground transition-colors"
          >
            <Dot />
            Case study {study.id}
          </Link>
          <span className="tracked-label text-accent">{study.status}</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl text-foreground leading-[1] max-w-4xl">
          {study.title}
        </h1>

        <p className="font-display-italic text-xl md:text-2xl text-muted-foreground mt-6 max-w-3xl leading-relaxed">
          {study.tagline}
        </p>

        <dl className="mt-10 md:mt-12 border-y border-border py-5 flex flex-wrap gap-x-12 gap-y-4">
          <div>
            <dt className="tracked-label text-muted-foreground mb-1.5">Year</dt>
            <dd className="text-foreground text-sm">{study.year}</dd>
          </div>
          <div>
            <dt className="tracked-label text-muted-foreground mb-1.5">Sector</dt>
            <dd className="text-foreground text-sm">{study.sectors.join(", ")}</dd>
          </div>
        </dl>

        <div
          className={`mt-10 md:mt-12 w-full md:w-[60%] mx-auto overflow-hidden border border-border bg-card ${
            study.cover.kind === "image" ? "aspect-[16/9]" : "aspect-[21/9]"
          }`}
        >
          {study.cover.kind === "image" ? (
            <img
              src={study.cover.src}
              alt={study.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center p-6 md:p-8">
              <CoverArt shape={study.cover.shape} className="max-w-2xl" />
            </div>
          )}
        </div>

        <div className="mt-12 md:mt-16 border-t border-border">
          {study.sections.map((section) => (
            <SectionRow key={section.label} section={section} />
          ))}

          {study.links.length > 0 && (
            <section className="grid md:grid-cols-[minmax(0,200px)_1fr] gap-3 md:gap-12 py-8 md:py-10 border-b border-border">
              <h2 className="tracked-label text-muted-foreground md:pt-1">
                <Dot />
                Live
              </h2>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {study.links.map((link) =>
                  link.href.startsWith("/") ? (
                    <Link
                      key={link.href + link.label}
                      to={link.href}
                      className="text-accent hover:opacity-70 transition-opacity text-base md:text-lg"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.href + link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:opacity-70 transition-opacity text-base md:text-lg"
                    >
                      {link.label}
                    </a>
                  )
                )}
              </div>
            </section>
          )}
        </div>

        <nav className="mt-12 md:mt-16 flex items-start justify-between gap-8">
          <div className="min-w-0">
            {prev && (
              <Link to={`/case-studies/${prev.slug}`} className="group block">
                <span className="tracked-label text-muted-foreground block mb-2">Previous</span>
                <span className="font-display text-xl md:text-2xl text-foreground group-hover:text-accent transition-colors">
                  {prev.title}
                </span>
              </Link>
            )}
          </div>
          <div className="min-w-0 text-right">
            {next && (
              <Link to={`/case-studies/${next.slug}`} className="group block">
                <span className="tracked-label text-muted-foreground block mb-2">Next</span>
                <span className="font-display text-xl md:text-2xl text-foreground group-hover:text-accent transition-colors">
                  {next.title}
                </span>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </Layout>
  );
};

export default CaseStudyDetail;
