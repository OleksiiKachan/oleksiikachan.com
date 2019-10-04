import React from 'react';
import classNames from 'classnames';
import './AboutSection.scss';
import CoverImage from '../CoverImage/CoverImage';
import { ParsedText } from '../../../elements';

/*
    <AboutSection
      aboutInfo={}
      className=''
    />
*/

type PropsType = {
  aboutInfo: {
    name: string;
    title: string;
    introduction: Array<string>;
    smContacts: Array<{ type: string; url: string }>;
    resumeUrl: string;
    availabilityDate: string;
    portfolioStack: Array<string>;
    repository: string;
    coverImage: string;
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
        coverImage={aboutInfo.coverImage}
      />

      <div className={classNames('aboutSection__titleText')}>
        <h1 className={classNames('aboutSection__title')}>{aboutInfo.name}</h1>
        <h2 className={classNames('aboutSection__subtitle')}>
          {aboutInfo.title}
        </h2>
        <a
          href={aboutInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={classNames('aboutSection__resumeLink')}
        >
          Printable CV
        </a>
      </div>
      <div className={classNames('aboutSection__introduction')}>
        {aboutInfo.introduction.map(item => {
          return (
            <ParsedText
              key={aboutInfo.introduction.indexOf(item)}
              className={classNames('aboutSection__introductionParagraph')}
            >
              {item}
            </ParsedText>
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
      <div className={classNames('aboutSection__portfolioStack')}>
        <p>This site is created using:</p>
        <p>{aboutInfo.portfolioStack.join(', ')}</p>
        <a
          href={aboutInfo.repository}
          target="_blank"
          rel="noopener noreferrer"
          className={classNames('aboutSection__portfolioRepository')}
        >
          {aboutInfo.repository}
        </a>
      </div>
    </div>
  );
};
