import React from 'react';
import { shallow } from 'enzyme';
import TimelineContainer from '..';

describe('TimelineContainer', () => {
  it('Snapshot', () => {
    const component = shallow(<TimelineContainer />);
    expect(component).toMatchSnapshot();
  });
});
