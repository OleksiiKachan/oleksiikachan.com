import React, { Component } from 'react';
import classNames from 'classnames';
import './TimelineItem.scss';
import OutlineButton from '../../OutlineButton';
import { TimelineItemType } from '../../../lib/types';

/*
    <TimelineItem index=number item={} side='' className=''/>
*/

type PropsType = {
  index: number;
  item: TimelineItemType;
  side: string;
  className?: string;
};

export default ({ index, item, side, className }: PropsType) => {
  return (
    <div
      className={classNames('timelineItem', `timelineItem_${side}`, className)}
    >
      <div
        className={classNames('timelineItem__circle')}
        style={{ animationDelay: `${600 + (index / 1.5) * 100}ms` }}
      />
      <div
        className={classNames('timelineItem__content')}
        style={{
          animationDelay: `${400 + (index / 1.5) * 100}ms`,
        }}
      >
        <h3 className={classNames('timelineItem__title')}>{item.title}</h3>
        <p className={classNames('timelineItem__dates')}>{item.dates}</p>
        <p className={classNames('timelineItem__subtitle')}>{item.subtitle}</p>
        <OutlineButton
          onClick={() => {}}
          className={classNames('timelineItem__button')}
        >
          See More
        </OutlineButton>
      </div>
    </div>
  );
};
