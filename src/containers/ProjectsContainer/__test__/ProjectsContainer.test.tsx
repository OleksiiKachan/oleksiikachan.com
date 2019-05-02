import React from 'react';
import { shallow } from 'enzyme';
import ProjectsContainer from '..';

describe('ProjectsContainer', () => {
  it('Snapshot', () => {
    const component = shallow(<ProjectsContainer />);
    expect(component).toMatchSnapshot();
  });
});
