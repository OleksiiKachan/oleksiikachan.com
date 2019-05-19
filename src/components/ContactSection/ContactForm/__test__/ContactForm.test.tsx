import React from 'react';
import { shallow } from 'enzyme';
import ContactForm from '..';

describe('ContactForm', () => {
  it('Snapshot', () => {
    const component = shallow(<ContactForm />);

    expect(component).toMatchSnapshot();
  });
});
