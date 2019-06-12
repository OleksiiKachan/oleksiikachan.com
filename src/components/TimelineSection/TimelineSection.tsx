import React from 'react';
import classNames from 'classnames';
import TimelineItem from './TimelineItem';
import './TimelineSection.scss';
import {
  TimelineItemType,
  ExperienceType,
  EducationType,
} from '../../lib/types';
import { transformToTimeline } from '../../lib/transformer';

/*
    <TimelineSection experience=[] education=[]/>
*/

type PropsType = {
  experience: Array<ExperienceType>;
  education: Array<EducationType>;
  className?: string;
};

export default ({ experience, education, className }: PropsType) => {
  let previousSide = 'right';
  const timeline = transformToTimeline(experience, education);
  return (
    <div
      id="education"
      className={classNames('experienceTimelineSection', className)}
    >
      <h2 className={classNames('experienceTimelineSection__title')}>
        Education & Experience
      </h2>
      <div className={classNames('experienceTimelineSection__timeline')}>
        {timeline.map((timelineItem: TimelineItemType) => {
          previousSide = previousSide === 'right' ? 'left' : 'right';
          const detailedItem =
            experience.find(item => item.companyTitle === timelineItem.title) ||
            education.find(item => item.school === timelineItem.title);
          return (
            <TimelineItem
              key={timeline.indexOf(timelineItem)}
              index={timeline.indexOf(timelineItem)}
              item={timelineItem}
              detailedItem={detailedItem}
              side={previousSide}
            />
          );
        })}
      </div>
    </div>
  );
};
