import React from 'react';
import classNames from 'classnames';
import './Textbox.scss';

/*
    <Textbox
      fieldName=''
      label=''
      autoComplete
      required 
      className=''
    />
*/

type PropsType = {
  fieldName: string;
  label: string;
  type?: string;
  autoComplete?: boolean;
  required?: boolean;
  className?: string;
};

export default ({
  type = 'text',
  fieldName,
  label,
  autoComplete = false,
  required = false,
  className,
}: PropsType) => {
  return (
    <div className={classNames('textbox', className)}>
      <input
        id={fieldName}
        type={type}
        name={fieldName}
        autoComplete={autoComplete ? 'yes' : 'no'}
        required={required}
        className={classNames('textbox__input')}
      />
      <label className={classNames('textbox__label')} htmlFor={fieldName}>
        {label}
      </label>
    </div>
  );
};
