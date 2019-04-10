import React, { Component } from 'react';
import classNames from 'classnames';
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
            const sideClass =
              previousSide === 'right'
                ? 'timelineItem__container_left'
                : 'timelineItem__container_right';
            previousSide = previousSide === 'right' ? 'left' : 'right';
            return (
              <div className={classNames('timelineItem__container', sideClass)}>
                <div className={classNames('timelineItem__content')}>
                  <h3 className={classNames('timelineItem__time')}>
                    {timelineItem.time}
                  </h3>
                  <h4 className={classNames('timelineItem__title')}>
                    {timelineItem.title}
                  </h4>
                  <p className={classNames('timelineItem__description')}>
                    {timelineItem.description}
                  </p>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
