import React from 'react';
import { shallow } from 'enzyme';
import MenuIconToggle from '..';

describe('MenuIconToggle', () => {
  it('Snapshot', () => {
    const component = shallow(<MenuIconToggle />);
    expect(component).toMatchSnapshot();
  });
});
