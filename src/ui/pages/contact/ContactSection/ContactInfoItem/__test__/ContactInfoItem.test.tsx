import React from 'react';
import { shallow } from 'enzyme';
import ContactInfoItem from '../ContactInfoItem';

describe('ContactInfoItem', () => {
  it('Snapshot', () => {
    const component = shallow(
      <ContactInfoItem
        icon="icon"
        iconAlt="icon alternative text"
        content="content"
      />
    );

    expect(component).toMatchSnapshot();
  });
});
