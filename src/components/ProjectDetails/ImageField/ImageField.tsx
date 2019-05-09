import React from 'react';
import classNames from 'classnames';
import './ImageField.scss';

/*
    <ImageField
      images=[]
      className=''
    />
*/

type PropsType = {
  images: Array<{ imageUrl: string; imageDescription?: string }>;
  className?: string;
};

export default ({ images, className }: PropsType) => {
  return (
    <div className={classNames('imageField', className)}>
      <div
        style={{ backgroundImage: `url(${images[0].imageUrl})` }}
        className={classNames('imageField__imageSlide')}
      >
        <div className={classNames('imageField__imageShader')} />
      </div>
    </div>
  );
};
