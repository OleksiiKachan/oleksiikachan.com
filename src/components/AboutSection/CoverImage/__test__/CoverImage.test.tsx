import React from 'react';
import { shallow } from 'enzyme';
import CoverImage from '..';

describe('CoverImage', () => {
  it('Snapshot', () => {
    const component = shallow(
      <CoverImage
        name="name"
        title="title"
        contacts={[
          { type: 'type1', url: 'url1' },
          { type: 'type2', url: 'url2' },
        ]}
        resumeUrl="resume.url"
      />
    );

    expect(component).toMatchSnapshot();
  });
});
