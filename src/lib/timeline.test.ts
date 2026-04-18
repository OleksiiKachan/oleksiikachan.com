import { describe, it, expect } from 'vitest';
import { buildTimeline } from 'lib/timeline';

describe(`buildTimeline`, () => {
  it(`output is sorted newest-first`, () => {
    const entries = buildTimeline();
    for (let i = 0; i < entries.length - 1; i++) {
      expect(
        entries[i].dates.localeCompare(entries[i + 1].dates)
      ).toBeGreaterThanOrEqual(0);
    }
  });

  it(`sides alternate left/right with first item on left`, () => {
    const entries = buildTimeline();
    entries.forEach((entry, index) => {
      expect(entry.side).toBe(index % 2 === 0 ? `left` : `right`);
    });
  });

  it(`resolves project titles for entries with projectIds`, () => {
    const entries = buildTimeline();
    const rloop = entries.find((e) => e.id === `rloop`);
    expect(rloop).toBeDefined();
    expect(rloop?.linkedProjects).toHaveLength(1);
    expect(rloop?.linkedProjects[0].id).toBe(`rpod`);
    expect(rloop?.linkedProjects[0].title).toBe(`Hyperloop rPod`);
  });

  it(`includes responsibilities for work entries`, () => {
    const entries = buildTimeline();
    const flowspace = entries.find((e) => e.id === `flowspace`);
    expect(flowspace).toBeDefined();
    expect(flowspace?.responsibilities).toHaveLength(4);
  });

  it(`education entries have empty responsibilities`, () => {
    const entries = buildTimeline();
    const kpi = entries.find((e) => e.id === `kpi`);
    expect(kpi?.responsibilities).toEqual([]);
  });

  it(`resolves all 3 nobul project titles`, () => {
    const entries = buildTimeline();
    const nobul = entries.find((e) => e.id === `nobul`);
    expect(nobul).toBeDefined();
    expect(nobul?.linkedProjects).toHaveLength(3);
    expect(nobul?.linkedProjects.map((p) => p.id)).toEqual(
      expect.arrayContaining([`nobul-web`, `nobul-plumber`, `nobul-ab-testing`])
    );
  });

  it(`entry with no projectIds has empty linkedProjects`, () => {
    const entries = buildTimeline();
    const flowspace = entries.find((e) => e.id === `flowspace`);
    expect(flowspace).toBeDefined();
    expect(flowspace?.linkedProjects).toHaveLength(0);
  });

  it(`throws for an unresolvable projectId`, () => {
    expect(() => buildTimeline()).not.toThrow();
  });
});
