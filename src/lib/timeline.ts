import { type ProjectId, getProjects } from 'data/projects';
import { education, experience } from 'data/timeline';

export type TimelineEntry = {
  type: `education` | `work`;
  id: string;
  title: string;
  subtitle: string;
  dates: string;
  responsibilities: Array<string>;
  linkedProjects: Array<{ id: ProjectId; title: string }>;
};

export const buildTimeline = (): Array<TimelineEntry> => {
  const projectIndex = new Map(getProjects().map((p) => [p.id, p.title]));

  const educationEntries = education.map((item) => ({
    type: `education` as const,
    id: item.id,
    title: item.school,
    subtitle: item.degree,
    dates: item.dates,
    responsibilities: [] as Array<string>,
    linkedProjects: [] as Array<{ id: ProjectId; title: string }>,
  }));

  const experienceEntries = experience.map((item) => {
    const linkedProjects = (item.projectIds ?? []).map((id) => {
      const title = projectIndex.get(id);
      if (!title) throw new Error(`Project "${id}" not found in projects data`);
      return { id, title };
    });
    return {
      type: `work` as const,
      id: item.id,
      title: item.company,
      subtitle: item.position,
      dates: item.dates,
      responsibilities: item.responsibilities,
      linkedProjects,
    };
  });

  return [...educationEntries, ...experienceEntries]
    .sort((a, b) => a.dates.localeCompare(b.dates))
    .reverse();
};
