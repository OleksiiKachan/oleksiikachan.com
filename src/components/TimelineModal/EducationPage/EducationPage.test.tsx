import React from 'react';
import { shallow } from 'enzyme';
import EducationPage from './';

describe('EducationPage', () => {
  it('Snapshot', () => {
    const component = shallow(
      <EducationPage
        item={{
          id: 'kpi',
          school:
            'National Technical University of Ukraine "Kyiv Polytechnic Institute"',
          degree: 'Bachelor of Software Engineering',
          department:
            'Faculty of Informatics and Computer Science, Department of Technical Cybernetics',
          program: 'Software Engineering',
          dates: '2013-2017',
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
