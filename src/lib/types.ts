export type ExperienceType = {
  id: string;
  companyTitle: string;
  position: string;
  dates: string;
  responsibilities: Array<string>;
  projects?: Array<{ id: string; title: string }>;
};

export type EducationType = {
  id: string;
  school: string;
  degree: string;
  department: string;
  program: string;
  dates: string;
};

export type TimelineItemType = {
  type: string;
  title: string;
  subtitle: string;
  dates: string;
};

export type ProjectType = {
  projectType: 'design' | 'development';
  title: string;
  description: string;
  shortStack: string;
  coverImage: string;
};

export type NavigationItemType = {
  key: string;
  title: string;
  sectionUrl: string;
  isSelected: boolean;
};
