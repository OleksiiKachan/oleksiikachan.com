import React, { Component } from 'react';
import classNames from 'classnames';
import './TimelineItem.scss';
import OutlineButton from '../../OutlineButton';

/*
    <TimelineItem index=number item={} side='' className=''/>
*/
type PropsType = {
  index: number;
  item: { title: string; subtitle: string; dates: string; type: string };
  side: string;
  className?: string;
};

export default ({ index, item, side, className }: PropsType) => {
  const animationDelay = {
    animationDelay: `${400 + (index / 1.5) * 100}ms`,
  };
  return (
    <div
      className={classNames('timelineItem', `timelineItem_${side}`, className)}
    >
      {/* <img
        className={classNames('timelineItem__icon')}
        src={`https://res.cloudinary.com/oleksiikachan/image/upload/v1555010635/portfolio/images/icons/icon_${
          item.type
        }.svg`}
      /> */}
      <div
        className={classNames('timelineItem__circle')}
        style={{ animationDelay: `${600 + (index / 1.5) * 100}ms` }}
      />
      <div
        className={classNames('timelineItem__content')}
        style={animationDelay}
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
