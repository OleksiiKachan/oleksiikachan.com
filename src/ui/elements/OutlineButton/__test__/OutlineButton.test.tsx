import React from 'react';
import { shallow } from 'enzyme';
import OutlineButton from '../OutlineButton';

describe('OutlineButton', () => {
  it('Gold button', () => {
    const component = shallow(
      <OutlineButton type="gold" onClick={() => {}}>
        Caption
      </OutlineButton>
    );

    expect(component).toMatchSnapshot();
  });
  it('Dark button', () => {
    const component = shallow(
      <OutlineButton type="dark" onClick={() => {}}>
        Caption
      </OutlineButton>
    );

    expect(component).toMatchSnapshot();
  });
});
