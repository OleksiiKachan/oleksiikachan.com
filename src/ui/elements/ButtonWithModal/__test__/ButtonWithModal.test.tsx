import React from 'react';
import { shallow } from 'enzyme';
import ButtonWithModal from '../ButtonWithModal';

describe('ButtonWithModal', () => {
  const component = shallow(
    <ButtonWithModal
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
    />
  );

  it('Snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('Show modal', () => {});

  it('Hide modal', () => {});
});
