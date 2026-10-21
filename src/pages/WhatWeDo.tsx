import { useState } from "react";
import Layout from "@/components/Layout";

// Line drawings, one per practice. Fine strokes in the practice colour via
// currentColor, in the spirit of the rest of the site's line-art covers.

// Forge: a burst of sparks resolving into one straight line to market.
const ForgeArt = () => (
  <svg viewBox="0 0 300 120" fill="none" stroke="currentColor" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => {
      const r = (a * Math.PI) / 180;
      const inner = a % 60 === 0 ? 8 : 12;
      const outer = a % 60 === 0 ? 30 : 22;
      return (
        <path
          key={a}
          d={`M${70 + Math.cos(r) * inner} ${60 + Math.sin(r) * inner} L${70 + Math.cos(r) * outer} ${60 + Math.sin(r) * outer}`}
          strokeWidth="1"
          opacity={a % 60 === 0 ? 0.9 : 0.5}
        />
      );
    })}
    <circle cx="70" cy="60" r="3" fill="currentColor" />
    <path d="M100 60 L250 60" strokeWidth="1" />
    <path d="M250 60 L256 54 L262 60 L256 66 Z" fill="currentColor" strokeWidth="1" />
  </svg>
);

// Paladin: many scattered tools merging into one system you own.
const PaladinArt = () => (
  <svg viewBox="0 0 300 120" fill="none" stroke="currentColor" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
    {[20, 40, 60, 80, 100].map((y) => (
      <g key={y}>
        <rect x="40" y={y - 4} width="8" height="8" strokeWidth="1" opacity="0.6" />
        <path d={`M48 ${y} L110 ${y} C140 ${y} 150 60 180 60`} strokeWidth="1" opacity="0.6" />
      </g>
    ))}
    <path d="M180 60 L206 60" strokeWidth="1" />
    <rect x="206" y="36" width="48" height="48" strokeWidth="1" strokeDasharray="3 3" />
    <rect x="222" y="52" width="16" height="16" fill="currentColor" strokeWidth="1" />
  </svg>
);

// Guild: one practitioner, branching into a team that carries the work on.
const GuildArt = () => (
  <svg viewBox="0 0 300 120" fill="none" stroke="currentColor" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
    <circle cx="60" cy="60" r="5" fill="currentColor" />
    {[24, 60, 96].map((y) => (
      <g key={y}>
        <path d={`M65 60 C100 60 110 ${y} 150 ${y}`} strokeWidth="1" opacity="0.8" />
        <circle cx="154" cy={y} r="4" strokeWidth="1" />
        {[-12, 0, 12].map((dy) => (
          <g key={dy}>
            <path d={`M158 ${y} C190 ${y} 200 ${y + dy} 232 ${y + dy}`} strokeWidth="0.8" opacity="0.5" />
            <circle cx="235" cy={y + dy} r="2.5" strokeWidth="0.8" opacity="0.7" />
          </g>
        ))}
      </g>
    ))}
  </svg>
);

type Practice = {
  name: string;
  headline: string;
  desc: string;
  stats: { value: string; label: string }[];
  steps: { label: string; text: string }[];
  Art: () => JSX.Element;
  // Full class names so Tailwind can see them at build time.
  text: string;
  pill: string;
  dot: string;
};

// TODO: the Paladin and Guild figures are placeholders (X, Y, XX). Replace
// them with real numbers before this page goes live.
const practices: Practice[] = [
  {
    name: "Forge",
    headline: "Thesis to launched product, fast.",
    desc: "A dedicated pod takes a new opportunity from idea to shipped product, then runs the go-to-market that gets it traction.",
    stats: [
      { value: "20M+", label: "Users across our products" },
      { value: "$40M", label: "Raised by our companies" },
      { value: "7 yrs", label: "Building at the frontier" },
    ],
    steps: [
      { label: "You bring", text: "A thesis, a market, or a founder with conviction." },
      { label: "We build", text: "A pod ships v1 in weeks, then runs launch, distribution and growth experiments." },
      { label: "You keep", text: "A live product with users, a GTM engine, and a story investors understand." },
    ],
    Art: ForgeArt,
    text: "text-forge",
    pill: "bg-forge/10 border-forge/30 text-forge",
    dot: "bg-forge",
  },
  {
    name: "Paladin",
    headline: "Software you own, built for how you work.",
    desc: "Why rent Salesforce when you can own something better? We build purpose-built CRMs, ERPs and internal tools around your workflows.",
    stats: [
      { value: "$XM", label: "Legacy software & seats replaced" },
      { value: "Y", label: "Orgs now on software they own" },
      { value: "XX", label: "Workflows run by agents" },
    ],
    steps: [
      { label: "You bring", text: "The stack you're tired of paying for, and the way your team actually works." },
      { label: "We build", text: "We map your workflows and build around them: your data, your rules, agents on the busywork." },
      { label: "You keep", text: "Software you own outright. No per-seat fees. We host and maintain it if you want." },
    ],
    Art: PaladinArt,
    text: "text-paladin",
    pill: "bg-paladin/10 border-paladin/30 text-paladin",
    dot: "bg-paladin",
  },
  {
    name: "Guild",
    headline: "Teams that build with AI, not around it.",
    desc: "We embed AI-native engineers alongside your people and train your team to ship the same way, so the capability stays when we leave.",
    stats: [
      { value: "XX", label: "Operators trained" },
      { value: "XX", label: "Engineers embedded" },
      { value: "Xx", label: "Faster from idea to ship" },
    ],
    steps: [
      { label: "You bring", text: "A team that knows the business but hasn't made the jump to AI-native work." },
      { label: "We build", text: "Engineers pair with your people on real projects and run hands-on training." },
      { label: "You keep", text: "People who ship faster on their own, a playbook for how you build, and help hiring." },
    ],
    Art: GuildArt,
    text: "text-guild",
    pill: "bg-guild/10 border-guild/30 text-guild",
    dot: "bg-guild",
  },
];

const WhatWeDo = () => {
  return (
    <Layout>
      <div className="flex-1 min-h-0 flex flex-col px-8 md:px-12 pt-6 md:pt-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6 md:mb-8">
          <div>
            <span className="tracked-label text-muted-foreground">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 align-middle" />
              What we do
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-3 leading-[1]">
              One studio. Three ways to build.
            </h1>
          </div>
          <p className="text-muted-foreground max-w-sm md:text-right">
            Seven years of building and growing products, backed by Tiger Global,
            Sequoia, SVP and other leading investors.
          </p>
        </div>

        <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-3 gap-5">
          {practices.map((p) => (
            <PracticeCard key={p.name} practice={p} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

const PracticeCard = ({ practice: p }: { practice: Practice }) => {
  const [open, setOpen] = useState(false);
  const detailId = `${p.name.toLowerCase()}-detail`;

  return (
    <article className="bg-card border border-border rounded-xl p-6 lg:p-7 flex flex-col min-h-0 overflow-hidden">
      {/* The drawing takes whatever height is left, and steps aside for the detail. */}
      {!open && (
        <div className={`${p.text} h-24 md:h-auto md:flex-1 md:min-h-16 md:max-h-48 mb-5`}>
          <p.Art />
        </div>
      )}

      <span className={`self-start inline-flex items-center gap-2 border rounded-full px-3.5 py-1 text-sm font-semibold ${p.pill}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />
        {p.name}
      </span>

      {open ? (
        <div id={detailId} className="mt-4 flex-1 min-h-0 overflow-y-auto">
          <p className="text-sm text-foreground leading-snug">{p.desc}</p>
          <ol className="mt-4 space-y-3">
            {p.steps.map((s) => (
              <li key={s.label} className="border-l-2 border-border pl-3">
                <p className={`tracked-label ${p.text}`}>{s.label}</p>
                <p className="text-sm text-muted-foreground mt-0.5 leading-snug">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <div id={detailId}>
          <h2 className="font-display text-2xl lg:text-[1.75rem] leading-tight text-foreground mt-4 md:min-h-[2.5em]">
            {p.headline}
          </h2>

          <dl className="grid grid-cols-3 gap-3 border-t border-border pt-4 mt-5">
            {p.stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse justify-end">
                <dt className="text-xs text-muted-foreground mt-1.5 leading-tight">{s.label}</dt>
                <dd className="font-display text-2xl lg:text-3xl text-foreground leading-none">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={detailId}
        className={`self-start mt-auto pt-5 font-semibold ${p.text} hover:opacity-70 transition-opacity`}
      >
        {open ? "← Back" : "Read more →"}
      </button>
    </article>
  );
};

export default WhatWeDo;
