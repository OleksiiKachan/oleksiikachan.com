import React from 'react';
import classNames from 'classnames';
import './ValueListField.scss';

/*
    <ValueListField
      fieldLabel=''
      list=[]
      className=''
    />
*/

type PropsType = {
  fieldLabel: string;
  list: Array<string>;
  className?: string;
};

export default ({ fieldLabel, list, className }: PropsType) => {
  return (
    <div className={classNames('valueListField', className)}>
      <p className={classNames('valueListField__label')}>{fieldLabel}:</p>
      <ul className={classNames('valueListField__list')}>
        {list.map(item => {
          return (
            <li key={item} className={classNames('valueListField__listItem')}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
