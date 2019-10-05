import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import './SocialMediaButton.scss';
import { icons } from '../../assets/icons';
import styled from 'styled-components';

/*
    <SocialMediaButton
      type=''
      url=''
      className=''
      style={}
    />
*/

type PropsType = {
  type: string;
  url: string;
  className?: string;
  style?: CSSProperties;
};

type IconType = {
  type: string;
};

const StyledIcon = styled.i`
  width: 36px;
  height: 36px;
  display: block;
  background-position: center;
  background-size: contain;
  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(1.25);
  }

  ${({ type }: IconType) => {
    switch (type) {
      case 'linkedin':
        return `
          background-image: url(${icons.social.linkedin.dark.blank});
          &:hover {
            background-image: url(${icons.social.linkedin.dark.filled});
          }`;
      case 'github':
        return `
          background-image: url(${icons.social.github.dark.blank});
          &:hover {
            background-image: url(${icons.social.github.dark.filled});
          }`;
      case 'instagram':
        return `
          background-image: url(${icons.social.instagram.dark.blank});
          &:hover {
            background-image: url(${icons.social.instagram.dark.filled});
          }`;
      case 'telegram':
        return `
          background-image: url(${icons.social.telegram.dark.blank});
          &:hover {
            background-image: url(${icons.social.telegram.dark.filled});
          }`;
      case 'facebook':
        return `
          background-image: url(${icons.social.facebook.dark.blank});
          &:hover {
            background-image: url(${icons.social.facebook.dark.filled});
          }`;
      case 'vk':
        return `
          background-image: url(${icons.social.vk.dark.blank});
          &:hover {
            background-image: url(${icons.social.vk.dark.filled});
          }`;
    }
  }}
`;

export default ({ type, url, className, style }: PropsType) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames('socialMediaButton', className)}
      style={style}
    >
      <StyledIcon type={type} />
      {/* <i
        className={classNames(
          'socialMediaButton__icon',
          `socialMediaButton__icon-${type}`
        )}
      /> */}
    </a>
  );
};
