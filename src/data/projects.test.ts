import { describe, it, expect } from 'vitest';
import { getProjects, getProjectById } from 'data/projects';

describe(`getProjects`, () => {
  it(`returns all 6 projects`, () => {
    expect(getProjects()).toHaveLength(6);
  });

  it(`each project has required fields`, () => {
    getProjects().forEach((project) => {
      expect(project.id).toBeTruthy();
      expect(project.title).toBeTruthy();
      expect(project.image).toBeTruthy();
      expect(project.settings.color).toBeTruthy();
    });
  });

  it(`no two projects share the same id`, () => {
    const ids = getProjects().map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe(`getProjectById`, () => {
  it(`returns the AGW project for id "agw"`, () => {
    const project = getProjectById(`agw`);
    expect(project).toBeDefined();
    expect(project?.id).toBe(`agw`);
    expect(project?.title).toBe(`OLSOM AGW`);
  });

  it(`returns undefined for unknown id`, () => {
    expect(getProjectById(`unknown`)).toBeUndefined();
  });
});
