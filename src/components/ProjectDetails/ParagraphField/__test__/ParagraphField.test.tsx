import React from 'react';
import { shallow } from 'enzyme';
import ParagraphField from '..';

describe('ParagraphField', () => {
  it('Snapshot', () => {
    const component = shallow(
      <ParagraphField
        content={[
          { type: 'string', content: 'strign content' },
          {
            type: 'list',
            header: 'list header',
            list: ['item1', 'item2', 'item3'],
          },
        ]}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
