import React from 'react';
import classNames from 'classnames';
import OutlineButton from '../../OutlineButton';
import './ProjectCard.scss';
import { Link } from 'react-router-dom';

/*
    <ProjectCard
      title=''
      stack=''
      coverImage=''
      className=''
    />
*/

type PropsType = {
  id: string;
  title: string;
  stack: string;
  cardImage: string;
  className?: string;
};

export default ({ id, title, stack, cardImage, className }: PropsType) => {
  return (
    <div
      className={classNames('projectCard', className)}
      style={{ backgroundImage: `url(${cardImage})` }}
    >
      <div className={classNames('projectCard__shader')}>
        <div className={classNames('projectCard__inner')}>
          <div className={classNames('projectCard__title')}>{title}</div>
          <div className={classNames('projectCard__stack')}>{stack}</div>
          <Link
            to={`projects/${id}`}
            className={classNames('projectCard__button')}
          >
            <OutlineButton type="gold" onClick={() => {}}>
              See More
            </OutlineButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
