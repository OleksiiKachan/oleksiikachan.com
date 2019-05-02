import React from 'react';
import { shallow } from 'enzyme';
import Navigation from '..';

describe('Navigation', () => {
  it('Snapshot', () => {
    const component = shallow(
      <Navigation
        navigationItems={[
          {
            key: 'mi_education',
            title: 'Education & Experience',
            sectionUrl: '/experience',
            isSelected: false,
          },
          {
            key: 'mi_contact',
            title: 'Contact',
            sectionUrl: '/contact',
            isSelected: false,
          },
        ]}
        onLinkClick={() => {}}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
