import React from 'react';
import { shallow } from 'enzyme';
import ProjectsFilter from '../ProjectsFilter';

describe('TimelineItem', () => {
  it('Active all', () => {
    const component = shallow(
      <ProjectsFilter activeType="all" onClick={() => {}} />
    );
    expect(component).toMatchSnapshot();
  });
  it('Active development', () => {
    const component = shallow(
      <ProjectsFilter activeType="development" onClick={() => {}} />
    );
    expect(component).toMatchSnapshot();
  });
  it('Active design', () => {
    const component = shallow(
      <ProjectsFilter activeType="design" onClick={() => {}} />
    );
    expect(component).toMatchSnapshot();
  });
});
