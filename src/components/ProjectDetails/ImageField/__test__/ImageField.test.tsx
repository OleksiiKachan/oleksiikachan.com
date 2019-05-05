import React from 'react';
import { shallow } from 'enzyme';
import ImageField from '..';

describe('ImageField', () => {
  it('Snapshot', () => {
    const component = shallow(
      <ImageField
        images={[
          {
            imageUrl: 'imageUrlWithDescription',
            imageDescription: 'description',
          },
          { imageUrl: 'imageUrlWithoutDescription' },
        ]}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
