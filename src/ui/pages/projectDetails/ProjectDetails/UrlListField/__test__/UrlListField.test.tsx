import React from 'react';
import { shallow } from 'enzyme';
import UrlListField from '../UrlListField';

describe('UrlListField', () => {
  it('Snapshot', () => {
    const component = shallow(
      <UrlListField
        fieldLabel="label"
        list={[
          { name: 'item1', url: 'url1' },
          { name: 'item2', url: 'url2' },
          { name: 'item3' },
        ]}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
