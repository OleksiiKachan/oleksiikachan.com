import React from 'react';
import { shallow } from 'enzyme';
import ValueListField from '../ValueListField';

describe('ValueListField', () => {
  it('Snapshot', () => {
    const component = shallow(
      <ValueListField fieldLabel="label" list={['item1', 'item2', 'item3']} />
    );
    expect(component).toMatchSnapshot();
  });
});
