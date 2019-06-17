import React from 'react';
import { shallow } from 'enzyme';
import ProjectDetails from '../ProjectDetails';

describe('ProjectDetails', () => {
  it('Snapshot', () => {
    const component = shallow(
      <ProjectDetails
        project={{
          id: 'id',
          client: [
            {
              name: 'clientWithUrl',
              url: 'url',
            },
            {
              name: 'clientWithoutUrl',
            },
          ],
          partner: [
            {
              name: 'partnerWithUrl',
              url: 'url',
            },
            {
              name: 'partnerWithoutUrl',
            },
          ],
          projectType: 'development',
          title: 'title',
          coverImage: 'coverImageUrl',
          shortStack: 'shortStack',
          longStack: ['tech1', 'tech2'],
          projectDescription: [{ type: 'strting', content: 'string content' }],
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
