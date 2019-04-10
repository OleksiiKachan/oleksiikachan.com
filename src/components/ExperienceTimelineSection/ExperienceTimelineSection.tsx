import React, { Component } from 'react';
import classNames from 'classnames';
import TimelineItem from './TimelineItem';
import './ExperienceTimelineSection.scss';

/*
    <ExperienceTimelineSection timeline={}/>
*/
type PropsType = {
  timeline: Array<{ time: string; title: string; description: string }>;
  className?: string;
};

export default ({ timeline, className }: PropsType) => {
  let previousSide = 'right';
  return (
    <div
      id="education"
      className={classNames('experienceTimelineSection', className)}
    >
      <h2 className={classNames('experienceTimelineSection__title')}>
        Education & Experience
      </h2>
      <div className={classNames('experienceTimelineSection__timeline')}>
        {timeline.map(
          (timelineItem: {
            time: string;
            title: string;
            description: string;
          }) => {
            previousSide = previousSide === 'right' ? 'left' : 'right';
            return (
              <TimelineItem
                key={timeline.indexOf(timelineItem)}
                index={timeline.indexOf(timelineItem)}
                timelineItem={timelineItem}
                timelineSide={previousSide}
              />
            );
          }
        )}
      </div>
    </div>
  );
};
