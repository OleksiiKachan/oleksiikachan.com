import React from 'react';
import { shallow } from 'enzyme';
import * as Transformer from '../transformer';

describe('CampaignCardList', () => {
  it('Transform into timeline array', () => {
    const experience = [
      {
        id: 'experience-1',
        companyTitle: 'experience-companyTitle-1',
        position: 'experience-position-1',
        dates: '2014',
        responsibilities: [],
      },
      {
        id: 'experience-2',
        companyTitle: 'experience-companyTitle-2',
        position: 'experience-position-2',
        dates: '2016-2017',
        responsibilities: [],
      },
    ];
    const education = [
      {
        id: 'education-1',
        school: 'education-school-1',
        degree: 'education-degree-1',
        department: '',
        program: '',
        dates: '2013-2017',
      },
      {
        id: 'education-2',
        school: 'education-school-2',
        degree: 'education-degree-2',
        department: '',
        program: '',
        dates: '2017-2019',
      },
    ];
    const timeline = [
      {
        dates: '2013-2017',
        subtitle: 'education-degree-1',
        title: 'education-school-1',
        type: 'education',
      },
      {
        dates: '2014',
        subtitle: 'experience-position-1',
        title: 'experience-companyTitle-1',
        type: 'work',
      },
      {
        dates: '2016-2017',
        subtitle: 'experience-position-2',
        title: 'experience-companyTitle-2',
        type: 'work',
      },
      {
        dates: '2017-2019',
        subtitle: 'education-degree-2',
        title: 'education-school-2',
        type: 'education',
      },
    ];
    expect(Transformer.transformToTimeline(experience, education)).toEqual(
      timeline
    );
  });
});
