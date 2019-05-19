import React from 'react';
import { shallow } from 'enzyme';
import ProjectsNavigation from '..';

describe('ProjectsNavigation', () => {
  it('Snapshot', () => {
    const component = shallow(<ProjectsNavigation />);
    expect(component).toMatchSnapshot();
  });
});
