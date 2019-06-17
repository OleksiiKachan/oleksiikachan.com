import React from 'react';
import classnames from 'classnames';

/*
    <MenuIconToggle />
*/

export default () => {
  return (
    <>
      <input
        type="checkbox"
        id="navigation__input"
        className={classnames('navigation__input')}
      />
      <label
        htmlFor="navigation__input"
        className={classnames('navigation__menuButton')}
      >
        <i className={classnames('navigation__menuButtonLine')} />
        <i className={classnames('navigation__menuButtonLine')} />
        <i className={classnames('navigation__menuButtonLine')} />
      </label>
    </>
  );
};
