import React from 'react';
import { shallow } from 'enzyme';
import Textbox from '../Textbox';

describe('Textbox', () => {
  it('Snapshot', () => {
    const component = shallow(
      <Textbox fieldName="fieldName" label="Field Label" required />
    );

    expect(component).toMatchSnapshot();
  });
});
