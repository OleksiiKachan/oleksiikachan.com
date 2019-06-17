import React from 'react';
import { shallow } from 'enzyme';
import ContactForm from '../ContactForm';

describe('ContactForm', () => {
  it('Snapshot', () => {
    const component = shallow(<ContactForm />);

    expect(component).toMatchSnapshot();
  });
});
