import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer';

describe('Footer', () => {
  it('Snapshot', () => {
    const component = shallow(
      <Footer
        smContacts={[
          { type: 'type1', url: 'url1' },
          { type: 'type2', url: 'url2' },
        ]}
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
