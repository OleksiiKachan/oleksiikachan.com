import React from 'react';
import classNames from 'classnames';
import './AboutSection.scss';
import CoverImage from './CoverImage';

/*
    <ContactSection contacts={} className='' />
*/

type PropsType = {
  aboutInfo: {
    name: string;
    title: string;
    introduction: Array<string>;
    smContacts: Array<{ type: string; url: string }>;
    resumeUrl: string;
    availabilityDate: string;
  };
  className?: string;
};

export default ({ aboutInfo, className }: PropsType) => {
  return (
    <div id="about" className={classNames('aboutSection', className)}>
      <CoverImage
        name={aboutInfo.name}
        title={aboutInfo.title}
        resumeUrl={aboutInfo.resumeUrl}
        contacts={aboutInfo.smContacts}
      />
      <div className={classNames('aboutSection__introduction', className)}>
        {aboutInfo.introduction.map(item => {
          return (
            <p
              key={aboutInfo.introduction.indexOf(item)}
              className={classNames('aboutSection__introductionParagraph')}
            >
              {item}
            </p>
          );
        })}
      </div>
      <div className={classNames('aboutSection__rightColumn')}>
        <p className={classNames('aboutSection__availabilityLabel')}>
          Available for work:{' '}
          <span className={classNames('aboutSection__availabilityDate')}>
            {aboutInfo.availabilityDate}
          </span>
        </p>
      </div>
    </div>
  );
};
