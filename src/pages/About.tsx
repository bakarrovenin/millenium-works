import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

/** Small gold dot used on every eyebrow label across the site. */
const Dot = () => (
  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 align-middle" />
);

const profiles: { label: string; href: string }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammadabubakarsaddique/" },
  { label: "X", href: "https://x.com/BakarsPOV" },
  { label: "GitHub", href: "https://github.com/bakarrovenin" },
  { label: "Substack", href: "https://blogrenegade.substack.com/" },
  { label: "Email", href: "mailto:mas@rovenin.com" },
];

/** Slugs match src/data/caseStudies.ts; order is deliberate, not alphabetical. */
const roles: { name: string; slug: string; tag: string }[] = [
  { name: "Assay", slug: "assay", tag: "Founder" },
  { name: "Garnet", slug: "garnet", tag: "Previous" },
  { name: "Trikl", slug: "trikl", tag: "Acquired" },
  { name: "Alt Ventures", slug: "alt-ventures", tag: "Previous" },
  { name: "Not NSFW", slug: "not-nsfw", tag: "Founder" },
  { name: "Rovenin", slug: "rovenin", tag: "Founder" },
  { name: "Vitalis Living", slug: "vitalis-living", tag: "Founder" },
  { name: "Alt Sprints", slug: "alt-sprints", tag: "Founder" },
  { name: "Steve AI", slug: "steve-ai", tag: "Founder" },
  { name: "Islapay", slug: "islapay", tag: "Consulting" },
  { name: "Neuromonics", slug: "neuromonics", tag: "Consulting" },
  { name: "Adam Smith International", slug: "adam-smith-international", tag: "Consulting" },
  { name: "Pryze", slug: "pryze", tag: "Previous" },
  { name: "Jiye Kissan", slug: "jiye-kissan", tag: "Previous" },
  { name: "Alt Find", slug: "alt-find", tag: "Previous" },
  { name: "Market Tracker", slug: "market-tracker", tag: "Experiment" },
  { name: "AI Avatar", slug: "ai-avatar", tag: "Experiment" },
];

const writings: { title: string; href: string; note?: string }[] = [
  {
    title: "Titan",
    href: "https://blogrenegade.substack.com/p/titan",
    note: "a memoir for my grandfather",
  },
  {
    title: "Sprinting the Marathon",
    href: "https://blogrenegade.substack.com/p/sprinting-the-marathon",
  },
  {
    title: "Trojan Horse",
    href: "https://blogrenegade.substack.com/p/the-trojan-horse-of-open-source",
  },
  {
    title: "That One Marx Weber Elective",
    href: "https://blogrenegade.substack.com/p/that-one-karl-marx-elective-in-my",
  },
];

/** The shelf, in no particular order. The current read leads, tagged inline. */
const reading: string[] = [
  "Book of Five Rings (current read)",
  "Lessons of History",
  "Heroes of History",
  "Almanack",
  "In the Line of Fire",
  "The Prince",
  "88 Days to Kandahar",
  "My Life with the Taliban",
  "Meditations",
  "A Brief History of Nearly Everything",
  "Titan",
  "48 Laws of Power",
  "How to Win Friends and Influence People",
  "Chip War",
  "Zen and the Art of Motorcycle Maintenance",
  "Game of Thrones",
  "The Protestant Ethic",
  "The Lesser Key of Solomon",
  "Zero to One",
  "Atomic Habits",
  "Caesar: Life of a Colossus",
  "Plutarch's Lives",
  "The River of Doubt",
  "Rockefeller: Letters to His Son",
  "The Rise and Fall of the Great Powers",
];

/** One labelled column. The two sit side by side on desktop and stack on mobile. */
const SectionColumn = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <section className="min-w-0">
    <h2 className="tracked-label text-muted-foreground mb-5 md:mb-6">
      <Dot />
      {label}
    </h2>
    {children}
  </section>
);

const About = () => {
  return (
    <Layout>
      <div className="px-8 md:px-12 py-12 md:py-20">
        <h1 className="font-display text-5xl md:text-7xl text-foreground leading-[1]">
          Bakar S.
        </h1>

        <p className="font-display-italic text-xl md:text-2xl text-muted-foreground mt-6 max-w-3xl leading-relaxed">
          I build companies, and the demand for them.
        </p>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          {profiles.map((profile) => (
            <a
              key={profile.href}
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              className="tracked-label text-accent hover:opacity-70 transition-opacity"
            >
              {profile.label}
            </a>
          ))}
        </div>

        <div className="mt-12 md:mt-16 border-t border-border pt-8 md:pt-10 grid md:grid-cols-[1.6fr_1fr] gap-x-12 lg:gap-x-20 gap-y-12">
          <SectionColumn label="Roles">
            <ul>
              {roles.map((role) => (
                <li
                  key={role.slug}
                  className="flex items-baseline justify-between gap-6 py-3 border-b border-border last:border-b-0"
                >
                  <Link
                    to={`/case-studies/${role.slug}`}
                    className="font-display text-xl md:text-2xl text-foreground hover:text-accent transition-colors"
                  >
                    {role.name}
                  </Link>
                  <span className="tracked-label text-muted-foreground shrink-0">
                    {role.tag}
                  </span>
                </li>
              ))}
            </ul>
          </SectionColumn>

          <div className="min-w-0 space-y-12 md:space-y-16">
            <SectionColumn label="Writings">
              <ul>
                {writings.map((writing) => (
                  <li
                    key={writing.href}
                    className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-3 border-b border-border last:border-b-0"
                  >
                    <a
                      href={writing.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-xl md:text-2xl text-foreground hover:text-accent transition-colors"
                    >
                      {writing.title}
                    </a>
                    {writing.note && (
                      <span className="font-display-italic text-sm md:text-base text-muted-foreground">
                        {writing.note}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </SectionColumn>

            <SectionColumn label="Reading">
              <ul>
                {reading.map((title) => (
                  <li
                    key={title}
                    className="font-display text-xl md:text-2xl text-foreground py-2.5 border-b border-border last:border-b-0"
                  >
                    {title}
                  </li>
                ))}
              </ul>
            </SectionColumn>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
