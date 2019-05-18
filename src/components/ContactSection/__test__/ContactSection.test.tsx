import React from 'react';
import { shallow } from 'enzyme';
import ContactSection from '..';

describe('ContactSection', () => {
  it('Snapshot', () => {
    const component = shallow(
      <ContactSection
        contacts={{
          phone: 'phone number',
          email: 'email',
          location: 'location',
        }}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
