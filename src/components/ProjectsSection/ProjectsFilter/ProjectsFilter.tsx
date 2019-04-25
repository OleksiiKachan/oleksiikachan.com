import React, { ReactNode } from 'react';
import classNames from 'classnames';
import './ProjectsFilter.scss';

/*
    <ProjectsFilter activeType='' onClick=() className='' />
*/

type PropsType = {
  activeType: string;
  onClick: (type: string) => void;
  className?: string;
};

export default ({ activeType, onClick, className }: PropsType) => {
  return (
    <ul className={classNames('projectsFilter', className)}>
      <FilterButton
        isActive={activeType === 'all'}
        type="all"
        onClick={() => onClick('all')}
      >
        All Projects
      </FilterButton>
      <FilterButton
        isActive={activeType === 'development'}
        type="development"
        onClick={() => onClick('development')}
      >
        Development
      </FilterButton>
      <FilterButton
        isActive={activeType === 'design'}
        type="design"
        onClick={() => onClick('design')}
      >
        Design
      </FilterButton>
    </ul>
  );
};

type ButtonPropsType = {
  isActive: boolean;
  type: string;
  onClick: () => void;
  children: ReactNode;
  className?: string;
};

const FilterButton = ({
  isActive,
  type,
  onClick,
  children,
  className,
}: ButtonPropsType) => {
  return (
    <li
      className={classNames(
        'projectsFilter__item',
        isActive && 'projectsFilter__item_clicked',
        className
      )}
    >
      <button
        id={`projectsFilterButton_${type}`}
        onClick={() => onClick()}
        className={classNames('projectsFilter__button')}
      >
        {children}
      </button>
    </li>
  );
};
