import * as Types from './types';

export const transformToTimeline = (
  experience: Array<Types.ExperienceType>,
  education: Array<Types.EducationType>
) => {
  return experience
    .map(item => {
      return {
        type: 'work',
        title: item.companyTitle,
        subtitle: item.position,
        dates: item.dates,
      };
    })
    .concat(
      education.map(item => {
        return {
          type: 'education',
          title: item.school,
          subtitle: item.degree,
          dates: item.dates,
        };
      })
    )
    .sort((a, b) => a.dates.localeCompare(b.dates));
};
