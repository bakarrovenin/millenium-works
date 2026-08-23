import { useState } from "react";
import Layout from "@/components/Layout";

const principles = [
  {
    id: "00",
    title: "Play at the frontier",
    body: "Always build the audacious. Experiment with the latest tech before the market catches up, and treat every emerging capability as raw material for the next product.",
  },
  {
    id: "01",
    title: "Speed is a feature",
    body: "Velocity compounds. Ship rough, learn fast, and trust that a week of shipping beats a quarter of planning every single time.",
  },
  {
    id: "02",
    title: "Build for the end user",
    body: "Every decision routes back to one question: does this make the user's life measurably better? Strategy, design, and code follow from the answer.",
  },
  {
    id: "03",
    title: "Small teams, big outcomes",
    body: "Three sharp operators outperform thirty average ones. We keep teams lean so context stays high and ownership stays personal.",
  },
  {
    id: "04",
    title: "Prioritize the audacious",
    body: "Incremental bets get incremental returns. We bias toward swings that look unreasonable on day one and obvious in hindsight.",
  },
  {
    id: "05",
    title: "Default to action",
    body: "When in doubt, do. Prototypes resolve debates faster than decks, and momentum is harder to manufacture than to maintain.",
  },
  {
    id: "06",
    title: "AI as a force multiplier",
    body: "AI sits inside every workflow, not bolted on top. We use it to compress timelines, expand creative range, and let small teams operate at staff scale.",
  },
  {
    id: "07",
    title: "Distribution over product",
    body: "The best product loses to the one people actually find. We design distribution into the product itself, not as a launch afterthought.",
  },
  {
    id: "08",
    title: "Own the customer relationship",
    body: "Direct lines beat intermediated ones. We earn the right to talk to users, learn from them in real time, and never outsource the relationship.",
  },
  {
    id: "09",
    title: "Iterate publicly",
    body: "Working in the open sharpens the work. Sharing roadmaps, demos, and rough edges turns customers into collaborators and shortens every feedback loop.",
  },
  {
    id: "10",
    title: "Simple beats clever",
    body: "Cleverness is expensive to maintain. We optimize for the obvious solution — fewer moving parts, less to explain, more that just works.",
  },
];

const Principles = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <Layout>
      <div className="px-8 md:px-12 py-12 md:py-20">
        <div className="flex items-baseline justify-between mb-12 md:mb-16">
          <h1 className="font-display text-5xl md:text-7xl text-foreground">
            <span className="font-display-italic">Principles</span>
          </h1>
          <span className="tracked-label text-muted-foreground hidden md:block">
            11 — How we operate
          </span>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {principles.map((p) => {
            const isOpen = openId === p.id;
            return (
              <div key={p.id}>
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : p.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-baseline gap-6 md:gap-10 py-5 md:py-6 text-left group"
                >
                  <span className="tracked-label text-muted-foreground w-8 shrink-0">
                    {p.id}
                  </span>
                  <h2 className={`flex-1 font-display text-2xl md:text-4xl transition-colors ${isOpen ? "text-accent" : "text-foreground group-hover:text-accent"}`}>
                    {p.title}
                  </h2>
                  <span
                    className={`tracked-label text-muted-foreground shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6 md:pb-8" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="pl-14 md:pl-[4.5rem] pr-8 max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Principles;
