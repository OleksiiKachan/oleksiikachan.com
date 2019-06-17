import React from 'react';
import classnames from 'classnames';

/*
    <NavigationLogo
      className=''
    />
*/

type PropsType = {
  className?: string;
};

export default ({ className }: PropsType) => {
  return (
    <div className={classnames('navigation__logoWrapper', className)}>
      <img
        alt="Oleksii Kachan logo"
        className={classnames('navigation__logoImage')}
        src="https://res.cloudinary.com/oleksiikachan/image/upload/v1546142703/portfolio/images/logo/logo_horizontal_dark.svg"
      />
    </div>
  );
};
