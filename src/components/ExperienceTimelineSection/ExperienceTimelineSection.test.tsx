import React from 'react';
import { shallow } from 'enzyme';
import ExperienceTimelineSection from './';

describe('ExperienceTimelineSection', () => {
  it('Snapshot', () => {
    const timeline = [
      {
        title: 'Title-education-left',
        subtitle: 'Subtitle-education-left',
        dates: 'Dates-education-left',
        type: 'education',
      },
      {
        title: 'Title-education-right',
        subtitle: 'Subtitle-education-right',
        dates: 'Dates-education-right',
        type: 'education',
      },
      {
        title: 'Title-work-left',
        subtitle: 'Subtitle-work-left',
        dates: 'Dates-work-left',
        type: 'work',
      },
      {
        title: 'Title-work-right',
        subtitle: 'Subtitle-work-right',
        dates: 'Dates-work-right',
        type: 'work',
      },
    ];
    const component = shallow(
      <ExperienceTimelineSection timeline={timeline} />
    );
    expect(component).toMatchSnapshot();
  });
});
