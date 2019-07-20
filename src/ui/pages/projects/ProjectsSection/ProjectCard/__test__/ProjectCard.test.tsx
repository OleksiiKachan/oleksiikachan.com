import React from 'react';
import { shallow } from 'enzyme';
import ProjectCard from '../ProjectCard';

describe('ProjectCard', () => {
  it('Snapshot', () => {
    const component = shallow(
      <ProjectCard
        id="id"
        title="AGW MES / WMS for automotive industry"
        stack={['.NET Framework']}
        settings={{ color: '#fff' }}
        description="description"
        cardImage="imageUrl"
      />
    );
    expect(component).toMatchSnapshot();
  });
});
