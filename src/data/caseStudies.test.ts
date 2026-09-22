import { describe, it, expect } from "vitest";
import { caseStudies, disciplines } from "./caseStudies";

const allCopy = (study: (typeof caseStudies)[number]) =>
  [
    study.title,
    study.tagline,
    study.year,
    ...study.sectors,
    ...study.sections.flatMap((s) => [s.label, s.body ?? "", ...(s.bullets ?? [])]),
    ...study.links.map((l) => l.label),
  ].join("\n");

describe("case studies", () => {
  it("never uses em or en dashes", () => {
    for (const study of caseStudies) {
      expect(allCopy(study), study.slug).not.toMatch(/[–—]/);
    }
  });

  it("carries no unfilled placeholders", () => {
    for (const study of caseStudies) {
      expect(allCopy(study), study.slug).not.toMatch(/\[(I WILL FILL|YEAR)/);
    }
  });

  it("files every study under at least one discipline, without repeats", () => {
    for (const study of caseStudies) {
      expect(study.tags.length, study.slug).toBeGreaterThan(0);
      expect(new Set(study.tags).size, study.slug).toBe(study.tags.length);
    }
  });

  it("gives every discipline filter at least one study", () => {
    for (const discipline of disciplines) {
      expect(caseStudies.some((s) => s.tags.includes(discipline)), discipline).toBe(true);
    }
  });

  it("keeps slugs unique and ids sequential", () => {
    expect(new Set(caseStudies.map((s) => s.slug)).size).toBe(caseStudies.length);
    caseStudies.forEach((s, i) => expect(s.id).toBe(String(i + 1).padStart(2, "0")));
  });
});
