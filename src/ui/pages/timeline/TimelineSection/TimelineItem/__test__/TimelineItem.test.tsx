import React from 'react';
import { shallow } from 'enzyme';
import TimelineItem from '../TimelineItem';

describe('TimelineItem', () => {
  it('Left side', () => {
    const component = shallow(
      <TimelineItem
        index={1}
        item={{
          title: 'Title-left',
          subtitle: 'Subtitle-left',
          dates: 'Dates-left',
          type: 'education',
        }}
        side="left"
      />
    );
    expect(component).toMatchSnapshot();
  });
  it('Right side', () => {
    const component = shallow(
      <TimelineItem
        index={1}
        item={{
          title: 'Title-right',
          subtitle: 'Subtitle-right',
          dates: 'Dates-right',
          type: 'education',
        }}
        side="right"
      />
    );
    expect(component).toMatchSnapshot();
  });
});
