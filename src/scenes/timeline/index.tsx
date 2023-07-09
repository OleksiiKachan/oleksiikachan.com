import { useMemo } from 'react';

import Helmet, { MetaData } from 'components/helmet';
import TimelineItem from './components/timeline-item';

import { Container, TimelineContainer, Line } from './styled';

interface EducationTimelineItem {
  id: string;
  school: string;
  degree: string;
  department: string;
  program: string;
  dates: string;
}

interface ExperienceTimelineItem {
  id: string;
  company: string;
  position: string;
  dates: string;
  responsibilities: Array<string>;
  projects: Array<{ id: string; title: string }>;
}

const Timeline = ({
  data: { title, education, experience, meta },
}: {
  data: {
    meta: MetaData;
    title: string;
    education: Array<EducationTimelineItem>;
    experience: Array<ExperienceTimelineItem>;
  };
}) => {
  const list = useMemo(
    () =>
      education
        .map((item) => ({
          type: `education`,
          id: item.id,
          title: item.school,
          subtitle: item.degree,
          dates: item.dates,
        }))
        .concat(
          experience.map((item) => ({
            type: `work`,
            id: item.id,
            title: item.company,
            subtitle: item.position,
            dates: item.dates,
          }))
        )
        .sort((a, b) => a.dates.localeCompare(b.dates))
        .reverse()
        .reduce<{ list: Array<any>; previousSide: string }>(
          ({ previousSide, list }, item) => {
            const currentSide = previousSide === `right` ? `left` : `right`;

            return {
              list: [...list, { ...item, side: currentSide }],
              previousSide: currentSide,
            };
          },
          { list: [], previousSide: `right` }
        ).list,
    [education, experience]
  );

  return (
    <Container>
      <Helmet data={meta} />
      <h1>{title}</h1>
      <TimelineContainer>
        <Line
          animate={{ bottom: [`150%`, `0%`] }}
          transition={{ duration: 1.5 }}
        />
        {list.map(({ side, ...item }, index) => (
          <TimelineItem key={item.id} item={item} side={side} index={index} />
        ))}
      </TimelineContainer>
    </Container>
  );
};
export default Timeline;
