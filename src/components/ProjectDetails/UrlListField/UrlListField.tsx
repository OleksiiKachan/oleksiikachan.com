import React from 'react';
import classNames from 'classnames';
import './UrlListField.scss';

/*
    <UrlListField
      fieldLabel=''
      list=[]
      className=''
    />
*/

type PropsType = {
  fieldLabel: string;
  list: Array<{ name: string; url?: string }>;
  alignment?: string;
  className?: string;
};

export default ({
  fieldLabel,
  list,
  alignment = 'row',
  className,
}: PropsType) => {
  return (
    <div
      className={classNames(
        'urlListField',
        `urlListField_${alignment}`,
        className
      )}
    >
      <p className={classNames('urlListField__label')}>{fieldLabel}:</p>
      <ul className={classNames('urlListField__list')}>
        {list.map(item => {
          return (
            <li
              key={item.name}
              className={classNames('urlListField__listItem')}
            >
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  className={classNames('urlListField__url')}
                >
                  {item.name}
                </a>
              ) : (
                item.name
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
