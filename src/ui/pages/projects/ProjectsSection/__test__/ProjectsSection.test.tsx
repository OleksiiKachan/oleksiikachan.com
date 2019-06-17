import React from 'react';
import { shallow } from 'enzyme';
import ProjectsSection from '../ProjectsSection';

describe('OutlineButton', () => {
  it('Snapshot', () => {
    const component = shallow(
      <ProjectsSection
        projects={[
          {
            projectType: 'development',
            title: 'AGW MES / WMS for automotive industry',
            shortStack: '.NET Framework',
            coverImage: 'https://picsum.photos/4212/2768',
            description:
              'While working in OLSOM company I worked with some of the biggest automotive manufacturers. I was developing new features for AGW system (which is the MES/WMS for manufacturing). Also I did deployment on new manufactories and support tickets.',
          },
          {
            projectType: 'development',
            title: 'AGW MES / WMS for automotive industry',
            shortStack: '.NET Framework',
            coverImage: 'https://picsum.photos/4212/2768',
            description:
              'While working in OLSOM company I worked with some of the biggest automotive manufacturers. I was developing new features for AGW system (which is the MES/WMS for manufacturing). Also I did deployment on new manufactories and support tickets.',
          },
        ]}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
