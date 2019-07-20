import React from 'react';
import { shallow } from 'enzyme';
import TechBadge from '../TechBadge';

describe('TechBadge', () => {
  it('Snapshot', () => {
    const component = shallow(<TechBadge>Tech Badge</TechBadge>);

    expect(component).toMatchSnapshot();
  });
});
