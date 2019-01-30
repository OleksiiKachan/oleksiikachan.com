import React from 'react';
import { shallow } from 'enzyme';
import ProjectDetails from './ProjectDetails';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<ProjectDetails project={ images: []} />', () => {
  it('renders project details component', () => {
    const project = {
      images: [],
    };
    const projectDetails = shallow(<ProjectDetails project={project} />);
    expect(projectDetails.find('div.projectDetails').length).toEqual(1);
  });
});
