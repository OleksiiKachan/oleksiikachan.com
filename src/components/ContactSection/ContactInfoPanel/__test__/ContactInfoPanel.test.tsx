import React from 'react';
import { shallow } from 'enzyme';
import ContactInfoPanel from '..';

describe('ContactInfoPanel', () => {
  it('Snapshot', () => {
    const component = shallow(
      <ContactInfoPanel
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
