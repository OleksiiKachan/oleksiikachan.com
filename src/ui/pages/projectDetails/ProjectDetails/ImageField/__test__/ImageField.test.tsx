import React from 'react';
import { shallow } from 'enzyme';
import ImageField from '../ImageField';

describe('ImageField', () => {
  it('Snapshot', () => {
    const component = shallow(<ImageField image="image" />);
    expect(component).toMatchSnapshot();
  });
});
