import React from 'react';
import { shallow } from 'enzyme';
import TimelineModal from './';

describe('TimelineModal', () => {
  it('Snapshot', () => {
    const component = shallow(
      <TimelineModal
        handleClose={() => {}}
        show={true}
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
        type="education"
        modalRootID="root"
      />
    );
    expect(component).toMatchSnapshot();
  });
});
