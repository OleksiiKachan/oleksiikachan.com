import React from 'react';
import classNames from 'classnames';
import ReactHtmlParser from 'react-html-parser';
import './ParsedText.scss';

/*
    <ParsedText className=''>
      {...children}
    </ParsedText>
*/

type PropsType = {
  children: string;
  className?: string;
};

export default ({ children, className }: PropsType) => {
  return (
    <p className={classNames(className)}>
      {ReactHtmlParser(
        children
          .split('|bold|')
          .join(`<span class='${classNames('parsedText_bold')}'>`)
          .split('|italic|')
          .join(`<span class='${classNames('parsedText_italic')}'>`)
          .split('|-|')
          .join('</span>')
      )}
    </p>
  );
};
