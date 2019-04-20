export type ExperienceType = {
  id: string;
  companyTitle: string;
  position: string;
  dates: string;
  responsibilities: Array<string>;
  projects?: Array<string>;
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
