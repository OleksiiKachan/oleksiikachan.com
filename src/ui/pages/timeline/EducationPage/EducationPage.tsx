import React from 'react';
import classNames from 'classnames';
import { EducationType } from '../../../../lib/types';
import './EducationPage.scss';

/*
    <EducationPage
      item={}
    />
*/

type PropsType = {
  item: EducationType;
};

export default ({ item }: PropsType) => {
  return (
    <div className={classNames('educationPage')}>
      <div className={classNames('educationPage__header')}>{item.school}</div>
      <div className={classNames('educationPage__subheader')}>
        <div className={classNames('educationPage__label')}>Degree:</div>
        <div className={classNames('educationPage__value')}>{item.degree}</div>
      </div>
      <div className={classNames('educationPage__field')}>
        <div className={classNames('educationPage__label')}>Dates:</div>
        <div className={classNames('educationPage__value')}>{item.dates}</div>
      </div>
      <div className={classNames('educationPage__field')}>
        <div className={classNames('educationPage__label')}>Department:</div>
        <div className={classNames('educationPage__value')}>
          {item.department}
        </div>
      </div>
      <div className={classNames('educationPage__field')}>
        <div className={classNames('educationPage__label')}>Program:</div>
        <div className={classNames('educationPage__value')}>{item.program}</div>
      </div>
    </div>
  );
};
