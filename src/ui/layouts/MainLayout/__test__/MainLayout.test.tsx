import React from 'react';
import { shallow } from 'enzyme';
import MainLayout from '../MainLayout';

describe('MainLayout', () => {
  it('Snapshot', () => {
    const component = shallow(<MainLayout>content</MainLayout>);
    expect(component).toMatchSnapshot();
  });
});
