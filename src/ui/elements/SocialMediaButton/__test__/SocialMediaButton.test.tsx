import React from 'react';
import { shallow } from 'enzyme';
import SocialMediaButton from '../SocialMediaButton';

describe('SocialMediaButton', () => {
  it('Snapshot', () => {
    const component = shallow(
      <SocialMediaButton type="github" url="github.com" />
    );

    expect(component).toMatchSnapshot();
  });
});
