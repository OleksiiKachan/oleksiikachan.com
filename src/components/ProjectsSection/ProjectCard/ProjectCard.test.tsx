import React from 'react';
import { shallow } from 'enzyme';
import ProjectCard from './';

describe('ProjectCard', () => {
  it('Snapshot', () => {
    const component = shallow(
      <ProjectCard
        title="AGW MES / WMS for automotive industry"
        stack=".NET Framework"
        coverImage="imageUrl"
      />
    );
    expect(component).toMatchSnapshot();
  });
});
