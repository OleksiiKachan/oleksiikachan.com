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
  settings: { color: string };
  id: string;
  teamSize?: string;
  partner?: Array<{ name: string; url?: string }>;
  client?: Array<{ name: string; url?: string }>;
  projectType: 'design' | 'development';
  title: string;
  cardImage: string;
  coverImage: string;
  shortStack: Array<string>;
  shortDescription: string;
  longStack: Array<string>;
  projectDescription: Array<{
    type: string;
    content?: string;
    header?: string;
    list?: Array<string>;
    images?: Array<{ url: string; alt: string }>;
  }>;
  externalResources?: Array<{ url: string; name: string }>;
  // achivements?: Array<string>;
};

export type NavigationItemType = {
  key: string;
  title: string;
  sectionUrl: string;
  isSelected: boolean;
};
