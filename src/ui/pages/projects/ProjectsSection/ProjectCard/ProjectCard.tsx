import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { OutlineButton, TechBadge } from '../../../../elements';
import './ProjectCard.scss';

/*
    <ProjectCard
      title=''
      stack=''
      cardImage=''
      className=''
    />
*/

type PropsType = {
  id: string;
  title: string;
  stack: Array<string>;
  cardImage: string;
  description: string;
  settings: { color: string };
  className?: string;
};

export default ({
  id,
  title,
  stack,
  cardImage,
  description,
  settings,
  className,
}: PropsType) => {
  return (
    <div
      style={{ backgroundColor: settings.color }}
      className={classNames('projectCard', className)}
    >
      <img
        src={cardImage}
        alt=""
        className={classNames('projectCard__coverImage')}
      />
      <div
        style={{ backgroundColor: settings.color, color: '#fff' }}
        className={classNames('projectCard__projectInfo')}
      >
        <h3 className={classNames('projectCard__title')}>{title}</h3>
        <div className={classNames('projectCard__stackList')}>
          {stack.map(item => {
            return <TechBadge type="light">{item}</TechBadge>;
          })}
        </div>
        <p className={classNames('projectCard__description')}>{description}</p>
        <Link
          to={`projects/${id}`}
          className={classNames('projectCard__button')}
        >
          <OutlineButton type="white" onClick={() => {}}>
            See More
          </OutlineButton>
        </Link>
      </div>
    </div>
  );
};
