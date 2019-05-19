import React from 'react';
import { shallow } from 'enzyme';
import NavigationLogo from '..';

describe('NavigationLogo', () => {
  it('Snapshot', () => {
    const component = shallow(<NavigationLogo />);
    expect(component).toMatchSnapshot();
  });
});
