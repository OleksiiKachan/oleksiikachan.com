import React from 'react';
import { shallow } from 'enzyme';
import AboutSection from '../AboutSection';

describe('AboutSection', () => {
  it('Snapshot', () => {
    const component = shallow(
      <AboutSection
        aboutInfo={{
          name: 'name',
          title: 'title',
          introduction: ['introduction string 1', 'introduction string 2'],
          smContacts: [
            { type: 'type1', url: 'url1' },
            { type: 'type2', url: 'url2' },
          ],
          resumeUrl: 'resume.url',
          availabilityDate: 'availability information',
          portfolioStack: ['item1', 'item2'],
        }}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
