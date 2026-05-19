import Layout from "@/components/Layout";

const WhatWeDo = () => {
  return (
    <Layout>
      <div className="px-8 md:px-12 py-12 md:py-20">
        <h1 className="text-2xl md:text-3xl font-medium mb-12 md:mb-16">What We Do</h1>

        <div className="space-y-12 max-w-3xl">
          <div>
            <p className="text-foreground text-lg md:text-xl leading-relaxed">
              We are a frontier, AI-first studio providing services and consultancy across Machine Learning, Agents, Product, and GTM/Growth.
            </p>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-foreground text-lg md:text-xl leading-relaxed">
              With 7 years of experience building and growing MVPs and early-stage products and companies, we've worked alongside investments from Tiger Global, Sequoia, SVP, and other leading investors.
            </p>
          </div>

          <div className="border-t border-border pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-3xl md:text-4xl font-medium text-foreground">20M+</p>
                <p className="text-muted-foreground text-sm mt-1">Users across our companies</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-medium text-foreground">$40M</p>
                <p className="text-muted-foreground text-sm mt-1">Total funding raised</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {[
                {
                  num: "01",
                  title: "Explore",
                  desc: "Partner with us to explore new opportunities — testing assumptions, validating solutions, and designing business models from the ground up.",
                  tags: ["Custom AI Agents", "Product Design", "No-Code Solutions", "Prototyping"],
                },
                {
                  num: "02",
                  title: "Build",
                  desc: "Go faster with us. We dedicate engineering resources to accelerate time to product-market fit across consumer products, SaaS, and AI.",
                  tags: ["Consumer Products", "Vertical SaaS", "Mini SaaS", "Engineering", "Digital Transformation"],
                },
                {
                  num: "03",
                  title: "Scale",
                  desc: "Fuel to go further — from fundraising to acquisition, we combine growth strategy with hands-on execution to scale your product.",
                  tags: ["GTM Strategy", "Fundraising", "Growth", "M&A"],
                },
              ].map((col, i) => (
                <div
                  key={col.num}
                  className={`py-8 md:py-0 md:px-6 ${i > 0 ? "border-t md:border-t-0 md:border-l border-border" : ""} ${i === 0 ? "md:pl-0" : ""}`}
                >
                  <p className="text-muted-foreground text-sm mb-1">{col.num}</p>
                  <h3 className="text-foreground text-2xl md:text-3xl font-medium mb-4">{col.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{col.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {col.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-foreground text-xs border border-border rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WhatWeDo;
