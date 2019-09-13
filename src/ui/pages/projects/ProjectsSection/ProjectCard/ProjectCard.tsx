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
  style?: any;
  className?: string;
};

export default ({
  id,
  title,
  stack,
  cardImage,
  description,
  settings,
  style,
  className,
}: PropsType) => {
  return (
    <div
      style={{ ...style, backgroundColor: settings.color }}
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
            return (
              <TechBadge
                type="light"
                key={item}
                style={{
                  animationDelay: `${800 +
                    (stack.indexOf(item) / 1.5) * 100}ms`,
                }}
                className={classNames('projectCard__stackItem')}
              >
                {item}
              </TechBadge>
            );
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
