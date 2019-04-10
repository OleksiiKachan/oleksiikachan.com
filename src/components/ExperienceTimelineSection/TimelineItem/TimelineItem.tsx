import React, { Component } from 'react';
import classNames from 'classnames';
import './TimelineItem.scss';

/*
    <TimelineItem timelineItem={} timelineSide='' className=''/>
*/
type PropsType = {
  index: number;
  timelineItem: { time: string; title: string; description: string };
  timelineSide: string;
  className?: string;
};

export default ({
  index,
  timelineItem,
  timelineSide,
  className,
}: PropsType) => {
  const animationDelay = {
    animationDelay: `${200 + (index / 1.5) * 100}ms`,
  };
  return (
    <>
      <div
        className={classNames(
          'timelineItem',
          `timelineItem_${timelineSide}`,
          className
        )}
        style={animationDelay}
      >
        <div
          className={classNames(
            'timelineItem__content',
            `timelineItem__content_${timelineSide}`
          )}
          style={animationDelay}
        >
          <div
            className={classNames(
              'timelineItem__arrow',
              `timelineItem__arrow_${timelineSide}`
            )}
          />
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
        <div
          className={classNames(
            'timelineItem__circle',
            `timelineItem__circle_${timelineSide}`
          )}
          style={{ animationDelay: `${600 + (index / 1.5) * 100}ms` }}
        />
      </div>
    </>
  );
};
