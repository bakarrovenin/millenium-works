import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css";

/**
 * /about as a standalone document, styled after inferact.ai.
 *
 * This page deliberately does not use Layout, the site's tokens, the display
 * serif, the section rhythm or the dark ground. It has no nav bar, no hero,
 * no cards and no buttons. Every rule it needs lives in About.module.css,
 * where the class names are hashed at build time, so nothing it does can
 * reach another page and nothing another page does can reach it.
 *
 * Newsreader is fetched here rather than in index.html so that only visitors
 * to this page pay for it. The site's own faces are a display serif and a
 * grotesque, neither of which is a book face.
 */

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;0,6..72,700;1,6..72,400&display=swap";

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

/**
 * Every URL below was checked against the Substack archive rather than
 * assumed: each resolves to the post of that name. "That One Max Weber
 * Elective" keeps its existing slug, which reads karl-marx, because that is
 * the real published URL of a post titled "That one Max Weber elective in
 * junior year". The slug is wrong at the source and the title is right.
 */
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
    title: "That One Max Weber Elective",
    href: "https://blogrenegade.substack.com/p/that-one-karl-marx-elective-in-my",
  },
];

/** The shelf, in the order given. The current read leads. */
const books: { title: string; author: string; note?: string }[] = [
  { title: "The Book of Five Rings", author: "Miyamoto Musashi", note: "current read" },
  { title: "The Lessons of History", author: "Will and Ariel Durant" },
  { title: "Heroes of History", author: "Will Durant" },
  { title: "The Almanack of Naval Ravikant", author: "Eric Jorgenson" },
  { title: "In the Line of Fire", author: "Pervez Musharraf" },
  { title: "The Prince", author: "Niccolo Machiavelli" },
  { title: "88 Days to Kandahar", author: "Robert L. Grenier" },
  { title: "My Life with the Taliban", author: "Abdul Salam Zaeef" },
  { title: "Meditations", author: "Marcus Aurelius" },
  { title: "A Short History of Nearly Everything", author: "Bill Bryson" },
  { title: "Titan", author: "Ron Chernow" },
  { title: "The 48 Laws of Power", author: "Robert Greene" },
  { title: "How to Win Friends and Influence People", author: "Dale Carnegie" },
  { title: "Chip War", author: "Chris Miller" },
  { title: "Zen and the Art of Motorcycle Maintenance", author: "Robert M. Pirsig" },
  { title: "A Game of Thrones", author: "George R. R. Martin" },
  { title: "The Protestant Ethic and the Spirit of Capitalism", author: "Max Weber" },
  { title: "The Lesser Key of Solomon", author: "Anonymous" },
  { title: "Zero to One", author: "Peter Thiel" },
  { title: "Atomic Habits", author: "James Clear" },
  { title: "Caesar: Life of a Colossus", author: "Adrian Goldsworthy" },
  { title: "Plutarch's Lives", author: "Plutarch" },
  { title: "The River of Doubt", author: "Candice Millard" },
  { title: "Rockefeller: Letters to His Son", author: "John D. Rockefeller" },
  { title: "The Rise and Fall of the Great Powers", author: "Paul Kennedy" },
];

const profiles: { label: string; href: string }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammadabubakarsaddique/" },
  { label: "X", href: "https://x.com/BakarsPOV" },
  { label: "GitHub", href: "https://github.com/bakarrovenin" },
  { label: "Substack", href: "https://blogrenegade.substack.com/" },
  { label: "Email", href: "mailto:connect.bakar@gmail.com" },
];

const footerNav: { to: string; label: string }[] = [
  { to: "/", label: "Millennium Works" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/principles", label: "Principles" },
  { to: "/what-we-do", label: "What We Do" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const About = () => {
  // The site's ground is near black. This page is white, so the body carries
  // a scoped class for as long as the page is mounted and gives it back on
  // the way out, leaving every other route exactly as it was.
  useEffect(() => {
    document.body.classList.add(styles.docBody);
    return () => document.body.classList.remove(styles.docBody);
  }, []);

  // Newsreader, fetched only by visitors to this page.
  useEffect(() => {
    if (document.querySelector(`link[href="${FONT_HREF}"]`)) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = FONT_HREF;
    document.head.appendChild(link);
  }, []);

  return (
    <main className={styles.doc}>
      <header>
        <p className={styles.name}>Bakar S.</p>
        <p className={styles.line}>I build companies, and the demand for them.</p>
      </header>

      <img
        className={styles.portrait}
        src="/bakar.jpg"
        alt="Bakar S."
        width={120}
        loading="eager"
        decoding="async"
      />

      <p>
        I am a growth and product operator. For seven years I have built and scaled
        early stage companies, mostly at the zero to one stage, across fintech, crypto,
        security and consumer.
      </p>

      <p>
        I run <Link to="/">Millennium Works</Link>, a studio that partners with founders
        on go to market, product and engineering. I am currently building{" "}
        <a href="https://assay.website" target="_blank" rel="noopener noreferrer">
          Assay
        </a>
        , independent verification for AI authored security fixes.
      </p>

      <h2 className={styles.h}>Roles</h2>
      <ul className={styles.rows}>
        {roles.map((role) => (
          <li key={role.slug} className={styles.row}>
            <span className={styles.rowName}>
              <Link to={`/case-studies/${role.slug}`}>{role.name}</Link>
            </span>
            <span className={styles.rowTag}>{role.tag}</span>
          </li>
        ))}
      </ul>

      <h2 className={styles.h}>Writings</h2>
      <ul className={styles.rows}>
        {writings.map((writing) => (
          <li key={writing.href} className={styles.row}>
            <span className={styles.rowName}>
              <a href={writing.href} target="_blank" rel="noopener noreferrer">
                {writing.title}
              </a>
            </span>
            {writing.note && <span className={styles.rowTag}>{writing.note}</span>}
          </li>
        ))}
      </ul>

      <h2 className={styles.h}>Books</h2>
      <ul className={styles.rows}>
        {books.map((book) => (
          <li key={book.title + book.author} className={styles.row}>
            <span className={styles.rowName}>
              {book.title}
              {book.note && <em className={styles.inlineNote}>{book.note}</em>}
            </span>
            <span className={styles.rowTag}>{book.author}</span>
          </li>
        ))}
      </ul>

      <h2 className={styles.h}>Elsewhere</h2>
      <p className={styles.elsewhere}>
        {profiles.map((profile, i) => (
          <span key={profile.href}>
            {i > 0 && <span className={styles.sep}>&middot;</span>}
            <a href={profile.href} target="_blank" rel="noopener noreferrer">
              {profile.label}
            </a>
          </span>
        ))}
      </p>

      <nav className={styles.foot} aria-label="Site">
        {footerNav.map((item) => (
          <Link key={item.to} to={item.to}>
            {item.label}
          </Link>
        ))}
      </nav>
    </main>
  );
};

export default About;
