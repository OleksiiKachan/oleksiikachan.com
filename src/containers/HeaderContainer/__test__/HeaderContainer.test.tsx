import React from 'react';
import { shallow } from 'enzyme';
import HeaderContainer from '..';

describe('HeaderContainer', () => {
  it('Snapshot', () => {
    const component = shallow(<HeaderContainer />);
    expect(component).toMatchSnapshot();
  });
});
