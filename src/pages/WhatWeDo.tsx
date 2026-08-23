import Layout from "@/components/Layout";

const BuildIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="6" y="6" width="12" height="12" />
    <rect x="22" y="6" width="12" height="12" />
    <rect x="6" y="22" width="12" height="12" />
    <rect x="22" y="22" width="12" height="12" />
  </svg>
);

const GrowIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2">
    <circle cx="20" cy="20" r="6" />
    <circle cx="20" cy="20" r="12" />
    <circle cx="20" cy="20" r="18" />
  </svg>
);

const ScaleIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M4 32 L14 22 L22 28 L36 8" />
    <path d="M28 8 L36 8 L36 16" />
  </svg>
);

const pillars = [
  {
    num: "01",
    title: "What we build",
    desc: "We dedicate engineering resources to take new opportunities from a thesis to a shipped product — across consumer, vertical SaaS, and applied AI.",
    tags: ["Financial Infrastructure", "Applied AI", "Enterprise Tools", "Consumer Products"],
    Icon: BuildIcon,
  },
  {
    num: "02",
    title: "How we grow",
    desc: "Distribution as a first-class discipline. We design and execute go-to-market motions that compound — for new products and category leaders alike.",
    tags: ["Account-Based Marketing", "GTM Strategy", "Product-Led Growth", "Experimentation"],
    Icon: GrowIcon,
  },
  {
    num: "03",
    title: "How we scale",
    desc: "From fundraising to acquisition, we combine strategy with hands-on execution to take products from early traction to category leadership.",
    tags: ["Fundraising", "M&A", "Growth Strategy", "Operations"],
    Icon: ScaleIcon,
  },
];

const WhatWeDo = () => {
  return (
    <Layout>
      <div className="px-8 md:px-12 py-12 md:py-20">
        <div className="mb-16 md:mb-24 max-w-4xl">
          <span className="tracked-label text-muted-foreground">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 align-middle" />
            What we do
          </span>
          <h1 className="font-display text-5xl md:text-7xl text-foreground mt-6 leading-[1] max-w-3xl">
            A frontier, AI-first studio for{" "}
            <span className="font-display-italic">ambitious</span> founders.
          </h1>
          <p className="mt-8 text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Seven years of building and growing early-stage products alongside
            investments from Tiger Global, Sequoia, SVP, and other leading
            investors.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-border py-10 mb-16 md:mb-24">
          <Stat value="20M+" label="Users across our companies" />
          <Stat value="$40M" label="Total funding raised" />
          <Stat value="7 yrs" label="Building at the frontier" />
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {pillars.map((p, i) => (
            <div
              key={p.num}
              className={`py-10 md:py-0 md:px-8 ${
                i > 0 ? "border-t md:border-t-0 md:border-l border-border" : ""
              } ${i === 0 ? "md:pl-0" : ""} ${i === pillars.length - 1 ? "md:pr-0" : ""}`}
            >
              <div className="text-accent mb-6">
                <p.Icon />
              </div>
              <span className="tracked-label text-muted-foreground">{p.num}</span>
              <h3 className="font-display text-3xl md:text-4xl text-foreground mt-2 mb-4">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tracked-label text-foreground/80 border border-border rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div>
    <p className="font-display text-5xl md:text-6xl text-foreground leading-none">
      {value}
    </p>
    <p className="text-muted-foreground text-sm mt-3">{label}</p>
  </div>
);

export default WhatWeDo;

