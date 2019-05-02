import React from 'react';
import classNames from 'classnames';
import './ProjectCard.scss';
import OutlineButton from '../../OutlineButton';

/*
    <ProjectCard title='' stack='' coverImage='' className='' />
*/

type PropsType = {
  title: string;
  stack: string;
  coverImage: string;
  className?: string;
};

export default ({ title, stack, coverImage, className }: PropsType) => {
  return (
    <div
      className={classNames('projectCard', className)}
      style={{ backgroundImage: `url(${coverImage})` }}
    >
      <div className={classNames('projectCard__inner')}>
        <div className={classNames('projectCard__title')}>{title}</div>
        <div className={classNames('projectCard__stack')}>{stack}</div>
        <OutlineButton
          className={classNames('projectCard__button')}
          type="gold"
          onClick={() => {}}
        >
          See More
        </OutlineButton>
      </div>
    </div>
  );
};
