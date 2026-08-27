import type { CoverArtKey } from "@/components/CoverArt";

import img01 from "@/assets/case-studies/01-trikl.jpg";
import img02 from "@/assets/case-studies/02-pryze.jpg";
import img03 from "@/assets/case-studies/03-jiye.jpg";
import img04 from "@/assets/case-studies/04-notnsfw.jpg";
import img05 from "@/assets/case-studies/05-altfind.jpg";
import img06 from "@/assets/case-studies/06-altsprints.jpg";
import img07 from "@/assets/case-studies/07-steve.jpg";
import img08 from "@/assets/case-studies/08-rovenin.jpg";
import img09 from "@/assets/case-studies/09-avatar.jpg";
import img10 from "@/assets/case-studies/10-islapay.jpg";
import img11 from "@/assets/case-studies/11-market-tracker.jpg";

export type Status = "Live" | "Acquired" | "Sunset" | "Delivered" | "Experiment";

/**
 * Body copy supports inline links written as [text](href).
 * An href starting with "/" renders as an in-app link; anything else opens
 * in a new tab. See renderRich() in CaseStudyDetail.
 */
export type Section = {
  label: string;
  body?: string;
  bullets?: string[];
  italicBullets?: boolean;
};

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  status: Status;
  sectors: string[];
  year: string;
  /** The one-line description, used on both the card and the detail page. */
  tagline: string;
  tier: "full" | "lean";
  cover: { kind: "image"; src: string } | { kind: "art"; shape: CoverArtKey };
  sections: Section[];
  links: { label: string; href: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "01",
    slug: "rovenin",
    title: "Rovenin",
    status: "Live",
    sectors: ["Fintech", "Research", "Capital Markets"],
    year: "2024",
    tagline:
      "Institutional-grade research on the questions retail investors actually care about, the first step toward a hedge fund built for the retail investor.",
    tier: "full",
    cover: { kind: "image", src: img08 },
    sections: [
      {
        label: "The Thesis",
        body: "Retail investors are handed headlines. Institutions are handed research. Rovenin closes that gap, publishing the same caliber of equity and macro analysis that sits behind institutional desks, aimed squarely at the questions retail investors are actually asking. It begins as a research publication and is being built toward a larger ambition: a hedge fund designed, from the ground up, for the retail investor.",
      },
      {
        label: "What We Shaped",
        bullets: [
          "Set the editorial standard, institutional rigor with retail accessibility, as the product's defining constraint.",
          "Built and shipped the publishing platform end to end, from data layer to live deployment.",
          "Directed the research agenda toward the highest-demand questions in the market: frontier-lab economics, landmark IPOs, and macro theses.",
        ],
      },
      {
        label: "Selected Work",
        italicBullets: true,
        bullets: [
          "Anthropic IPO Research: The First Audited Look at Frontier-Lab Economics",
          "Our Gold Thesis: Follow Central Bank Money",
          "Figma IPO: $15B Valuation Hinges on the AI Race",
        ],
      },
    ],
    links: [{ label: "rovenin.com", href: "https://rovenin.com" }],
  },
  {
    id: "02",
    slug: "trikl",
    title: "Trikl",
    status: "Acquired",
    sectors: ["Fintech", "Consumer"],
    year: "2022",
    tagline:
      "The region's first card round-up investing platform, built from zero with the founding team, and acquired within the year.",
    tier: "full",
    cover: { kind: "image", src: img01 },
    sections: [
      {
        label: "The Thesis",
        body: "Trikl set out to make investing automatic for a generation that had never held a brokerage account, turning everyday card spending into micro-investments quietly in the background.",
      },
      {
        label: "What We Shaped",
        body: "We joined as part of the founding product team and took the product from nothing to a launched MVP. We designed and operationalized the region's first card round-up investing feature, automated micro-investments drawn from daily transactions, and orchestrated the integrations that made it real: banking partners, card management systems, mutual funds, the Central Depository Company, and SECP regulatory workflows. On growth, we drove acquisition through campus ambassador programs and paid channels.",
      },
      {
        label: "Proof",
        body: "The region's first round-up investing product. Customer acquisition cost driven as low as $0.30. Acquired by Elphinstone.",
      },
    ],
    links: [
      { label: "elphinstone.us (acquirer)", href: "https://elphinstone.us" },
      { label: "A company of Alt Ventures", href: "/case-studies/alt-ventures" },
    ],
  },
  {
    id: "03",
    slug: "garnet",
    title: "Garnet",
    status: "Live",
    sectors: ["Security", "Developer Tools"],
    year: "2024",
    tagline:
      "Runtime security at the kernel, and the product-led growth engine that took it to market from a standing start.",
    tier: "full",
    cover: { kind: "art", shape: "garnet" },
    sections: [
      {
        label: "The Thesis",
        body: "Garnet answers a question most security tools cannot: what does code actually do when it runs? A lightweight eBPF agent, it detects and blocks threats such as supply-chain attacks, cryptominers, and container escapes in real time across CI and CD pipelines and Kubernetes, built by a team of open-source maintainers and infrastructure veterans.",
      },
      {
        label: "What We Shaped",
        body: "We joined with zero active pipeline and built the outbound and product-led growth motion from scratch. We prospected 500+ developer-first and cloud-native companies with security-led outreach and moved three to four enterprise accounts into pipeline within the first growth cycle. We led the SOC 2 compliance initiative end to end, clearing an enterprise sales bottleneck that had sat unresolved for roughly two years. And we built the threat-intelligence content engine, translating low-level runtime and supply-chain security into developer-facing growth assets, helping shift the company from account-based outbound toward a scalable, developer-led acquisition model.",
      },
      {
        label: "Proof",
        body: "Zero to three or four enterprise accounts in pipeline within one growth cycle. 500+ cloud-native companies prospected. A two-year SOC 2 bottleneck cleared. A repeatable, content-driven growth engine.",
      },
    ],
    links: [{ label: "garnet.ai", href: "https://www.garnet.ai" }],
  },
  {
    id: "04",
    slug: "adam-smith-international",
    title: "Adam Smith International",
    status: "Delivered",
    sectors: ["Enterprise", "Operations"],
    year: "2024",
    tagline:
      "The internal operating system for a 4,000+ person global workforce, rebuilt from fragmented processes into one platform.",
    tier: "full",
    cover: { kind: "art", shape: "adam-smith" },
    sections: [
      {
        label: "The Thesis",
        body: "Adam Smith International ran its global operations, contractor onboarding, payments, approvals, and workforce management, across fragmented and disconnected processes. The mandate: replace all of it with one centralized operational platform.",
      },
      {
        label: "What We Shaped",
        body: "We helped rebuild the internal operations platform used across 4,000+ personnel, shipping 12 core modules over roughly 12 months: contractor workflows, timesheet approvals, payment processing, admin controls, and multi-role access. We built the full contractor to admin to accounts pipeline, where contractors log billable hours, managers approve, and finance processes payouts, all in one system.",
      },
      {
        label: "Proof",
        body: "12 core operational modules shipped in roughly 12 months. One platform replacing fragmented processes across 4,000+ personnel. The team was retained after delivery for long-term implementation.",
      },
    ],
    links: [
      { label: "adamsmithinternational.com (client)", href: "https://www.adamsmithinternational.com" },
    ],
  },
  {
    id: "05",
    slug: "neuromonics",
    title: "Neuromonics",
    status: "Live",
    sectors: ["Healthtech", "Consumer"],
    year: "2025",
    tagline:
      "A clinical-grade tinnitus treatment platform: assessment, audio therapy, and provider coordination in one system.",
    tier: "full",
    cover: { kind: "art", shape: "neuromonics" },
    sections: [
      {
        label: "The Thesis",
        body: "Neuromonics brings a fragmented tinnitus care journey into a single iOS platform, combining clinical assessment, personalized audio-therapy recommendations, and provider coordination.",
      },
      {
        label: "What We Shaped",
        body: "We integrated 75+ clinically validated tinnitus assessment questions and treatment pathways drawn from recognized tinnitus organizations, and worked with engineering on a recommendation engine that matched patients to personalized audio-therapy plans from their symptom profiles. We structured the clinic coordination flows end to end: onboarding, scheduling, provider matching, and treatment tracking.",
      },
      {
        label: "Proof",
        body: "75+ clinically validated assessments integrated. 100+ active patients. Accepted as a care partner across 14 tinnitus treatment organizations and clinics.",
      },
    ],
    links: [{ label: "neuromonics.com", href: "https://www.neuromonics.com" }],
  },
  {
    id: "06",
    slug: "islapay",
    title: "Islapay",
    status: "Live",
    sectors: ["Fintech", "Payments", "Stablecoin"],
    year: "2025",
    tagline: "Fiat to stablecoin payment rails for the Caribbean, architected touchpoint by touchpoint.",
    tier: "full",
    cover: { kind: "image", src: img10 },
    sections: [
      {
        label: "The Thesis",
        body: "Islapay moves money across Caribbean remittance corridors where the rails are fragmented and the compliance bar is high, bridging fiat and stablecoin across TTD, GYD, and USDC.",
      },
      {
        label: "What We Shaped",
        body: "We led product and infrastructure operations for the platform, mapping the entire transaction matrix: 33 touchpoints spanning wallet creation, deposits, send and receive, conversions, treasury, liquidity, settlement, and reconciliation. We designed the operational flows around treasury management, liquidity pools, internal netting, and stablecoin on and off-ramping, and worked directly with banking partners, payout providers, and custody vendors while navigating VASP frameworks and KYC and AML requirements across the region.",
      },
      {
        label: "Proof",
        body: "A complete 33-touchpoint transaction architecture. Live across TTD, GYD, and USDC rails. Delivered with a 7-person cross-functional team.",
      },
    ],
    links: [{ label: "Islapay on LinkedIn", href: "https://www.linkedin.com/company/islapay" }],
  },
  {
    id: "07",
    slug: "alt-ventures",
    title: "Alt Ventures",
    status: "Live",
    sectors: ["Studio", "Venture Building"],
    year: "2019",
    tagline:
      "A startup studio building and scaling early-stage products from zero to one, and the origin of much of this portfolio.",
    tier: "full",
    cover: { kind: "art", shape: "alt-ventures" },
    sections: [
      {
        label: "The Thesis",
        body: "Alt Ventures is a startup studio that has been building since 2019, working alongside founders across fintech, SaaS, AI, marketplaces, and consumer products, from idea validation through MVP and go-to-market.",
      },
      {
        label: "What We Shaped",
        body: "As a venture builder, we worked hands-on across 13+ early-stage startups, from validation to launch to growth: rapid prototyping, product strategy, founder-led sales, onboarding flows, growth experiments, and user research inside extremely lean teams. We lived the full startup lifecycle across the portfolio, pivots, shutdowns, acquisitions, and scale.",
      },
      {
        label: "Proof",
        body: "13+ ventures built. 20M+ users across portfolio companies. $40M+ raised from investors including Tiger Global and Sequoia-backed firms.",
      },
      {
        label: "Portfolio On This Page",
        body: "[Trikl](/case-studies/trikl), [Pryze](/case-studies/pryze), [Jiye Kissan](/case-studies/jiye-kissan), [Alt Sprints](/case-studies/alt-sprints)",
      },
    ],
    links: [{ label: "altventures.co", href: "https://altventures.co" }],
  },
  {
    id: "08",
    slug: "alt-sprints",
    title: "Alt Sprints",
    status: "Sunset",
    sectors: ["Studio", "No-Code"],
    year: "2023",
    tagline: "A no-code product studio, scaled to $25K per month and a 27-person team.",
    tier: "full",
    cover: { kind: "image", src: img06 },
    sections: [
      {
        label: "The Thesis",
        body: "Alt Sprints was built to ship real products fast for founders and enterprises, riding the early rise of no-code, with Bubble as the engine and delivery discipline as the edge.",
      },
      {
        label: "What We Shaped",
        body: "We co-founded and scaled the studio to roughly $25K per month in revenue with a 27-person cross-functional team across engineering, product, design, and operations. We shipped internal tools, MVPs, and client platforms for organizations including [Adam Smith International](/case-studies/adam-smith-international) and Jobaxis, and ran the full engine: discovery, scoping, hiring, delivery, and go-to-market. It ran profitably for two years before we wound it down as operational scaling outpaced the model.",
      },
      {
        label: "Proof",
        body: "Roughly $25K per month in revenue. 27-person team. Two years profitable. Enterprise clients delivered.",
      },
    ],
    links: [
      { label: "Alt Sprints on LinkedIn", href: "https://www.linkedin.com/company/alt-sprints" },
      { label: "A company of Alt Ventures", href: "/case-studies/alt-ventures" },
    ],
  },
  {
    id: "09",
    slug: "pryze",
    title: "Pryze",
    status: "Live",
    sectors: ["Consumer", "Gaming"],
    year: "2023",
    tagline:
      "Pakistan's first skill-based competitive gaming platform, real-time tournaments for a regional market of 250M+ players.",
    tier: "full",
    cover: { kind: "image", src: img02 },
    sections: [
      {
        label: "The Thesis",
        body: "Pryze turns everyday mobile gaming into something with stakes: a curated lineup of skill-based games where players compete in real-time tournaments, climb leaderboards, and earn rewards on performance, built for a regional gaming market of over 250 million players.",
      },
      {
        label: "What We Shaped",
        body: "Working as part of the [Alt Ventures](/case-studies/alt-ventures) studio, we contributed to Pryze's early product and go-to-market, shaping the tournament experience, the reward mechanics, and the acquisition approach for a first-of-its-kind product in the market.",
      },
      {
        label: "Proof",
        body: "First skill-based competitive gaming platform in the market, addressing a regional base of 250M+ players.",
      },
    ],
    links: [
      { label: "pryze.io", href: "https://www.pryze.io" },
      { label: "Built with Alt Ventures", href: "/case-studies/alt-ventures" },
    ],
  },
  {
    id: "10",
    slug: "jiye-kissan",
    title: "Jiye Kissan",
    status: "Sunset",
    sectors: ["Vertical SaaS", "Agritech"],
    year: "2021",
    tagline:
      "A three-way agricultural marketplace built to connect Pakistani farmers directly to retailers, farm to table.",
    tier: "full",
    cover: { kind: "image", src: img03 },
    sections: [
      {
        label: "The Thesis",
        body: "Jiye Kissan connects farmers to retailers of fresh agricultural produce through its own warehousing and fulfillment, collapsing the many links between production and the final seller. By shortening the chain and applying economies of scale, it delivers higher quality goods to retailers' doorsteps, faster and at better prices.",
      },
      {
        label: "What We Shaped",
        body: "We worked across the product at every stage, from onboarding farmers onto the marketplace to shaping the experience itself. We ran the market research that mapped rates across the supply chain and its many layers, middlemen, distributors, wholesalers, and the traditional mandi system, giving the marketplace the pricing and positioning to compete with the very chain it was built to replace.",
      },
      {
        label: "Proof",
        body: "Backed by Sarmayacar. Own warehousing and fulfillment across the produce supply chain.",
      },
    ],
    links: [
      { label: "jiyetech.co", href: "https://jiyetech.co" },
      { label: "Portfolio: Sarmayacar", href: "https://sarmayacar.com/ventures/jiye-kissan" },
      { label: "A company of Alt Ventures", href: "/case-studies/alt-ventures" },
    ],
  },
  {
    id: "11",
    slug: "steve-ai",
    title: "Steve AI",
    status: "Sunset",
    sectors: ["AI", "Developer Tools"],
    year: "2023",
    tagline: "An AI developer assistant for Linear, from Figma to live MVP in under seven days.",
    tier: "lean",
    cover: { kind: "image", src: img07 },
    sections: [
      {
        label: "Overview",
        body: "An early bet in the first wave of AI tooling: a developer assistant that let engineers query tickets, issues, and project updates conversationally. We built and launched it in under seven days, Figma prototypes to live MVP on Bubble plus OpenAI, designed the prompt workflows and chatbot logic, set up GCP Cloud Functions for reliability, and ran go-to-market across LinkedIn, email, and a Product Hunt launch.",
      },
    ],
    links: [{ label: "Steve on Product Hunt", href: "https://www.producthunt.com/products/steve-2" }],
  },
  {
    id: "12",
    slug: "alt-find",
    title: "Alt Find",
    status: "Sunset",
    sectors: ["AI", "Recruiting"],
    year: "2023",
    tagline: "An AI-assisted hiring platform, built from 50+ recruiter interviews.",
    tier: "lean",
    cover: { kind: "image", src: img05 },
    sections: [
      {
        label: "Overview",
        body: "We interviewed 50+ recruiters, hiring managers, and operators to map the real pain across sourcing, screening, and applicant tracking, then designed and launched an AI-assisted hiring platform where recruiters could generate applications, interview questions, and candidate workflows dynamically. We shaped the MVP, the user flows, and the applicant tracking and candidate-matching logic through multiple pivots.",
      },
    ],
    links: [{ label: "Alt Find on LinkedIn", href: "https://www.linkedin.com/company/altfind" }],
  },
  {
    id: "13",
    slug: "not-nsfw",
    title: "Not NSFW",
    status: "Live",
    sectors: ["Consumer", "Media"],
    year: "2022",
    tagline: "One clean workplace joke a day, a humor-first newsletter, still running.",
    tier: "lean",
    cover: { kind: "image", src: img04 },
    sections: [
      {
        label: "Overview",
        body: "Born from watching burnout in high-pressure startups, Not NSFW sends one safe-for-work workplace joke daily by email, now running as a growing Substack. We built the automated distribution and engagement workflows that keep it running with minimal overhead, and are exploring the next iteration: a Slack-native bot for teams.",
      },
    ],
    links: [{ label: "notnsfw.substack.com", href: "https://notnsfw.substack.com" }],
  },
  {
    id: "14",
    slug: "market-tracker",
    title: "Market Tracker",
    status: "Experiment",
    sectors: ["Fintech", "Personal Build"],
    year: "2026",
    tagline: "A live market tracker built to run on a BlackBerry Passport, modern data on a dead OS.",
    tier: "lean",
    cover: { kind: "image", src: img11 },
    sections: [
      {
        label: "Overview",
        body: "A personal build and a constraint exercise: a live price tracker for stocks, commodities, indices, and crypto that runs on the BlackBerry 10 browser, a 2014-era engine with no modern app support. Built in pure vanilla JavaScript with no framework and no build step, pulling live data from Twelve Data and CoinGecko, with a persistent watchlist and mini charts, deployed static on Vercel and installable straight to the home screen.",
      },
    ],
    links: [
      { label: "Live app", href: "https://stock-tracker-sooty-tau.vercel.app" },
      { label: "Code", href: "https://github.com/bakarrovenin/stock-tracker" },
    ],
  },
  {
    id: "15",
    slug: "ai-avatar",
    title: "AI Avatar",
    status: "Experiment",
    sectors: ["AI", "Consumer"],
    year: "2022",
    tagline: "A fast probe into generative avatars, before the category existed.",
    tier: "lean",
    cover: { kind: "image", src: img09 },
    sections: [
      {
        label: "Overview",
        body: "An early experiment in the first wave of consumer diffusion models. We tested whether a handful of photos could be turned into a coherent set of stylized portraits, and, more usefully, what the productization and unit economics of image generation would look like at consumer scale. A quick probe that mapped the edges of the category before the avatar-app gold rush saturated it.",
      },
    ],
    links: [],
  },
];

export const getCaseStudy = (slug?: string) =>
  caseStudies.find((study) => study.slug === slug);
