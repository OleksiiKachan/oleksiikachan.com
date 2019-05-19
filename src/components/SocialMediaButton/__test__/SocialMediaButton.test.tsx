import React from 'react';
import { shallow } from 'enzyme';
import SocialMediaButton from '..';

describe('SocialMediaButton', () => {
  it('Snapshot', () => {
    const component = shallow(
      <SocialMediaButton type="github" url="github.com" />
    );

    expect(component).toMatchSnapshot();
  });
});
