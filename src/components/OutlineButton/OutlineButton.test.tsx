import React from 'react';
import { shallow } from 'enzyme';
import OutlineButton from './';

describe('OutlineButton', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(
      <OutlineButton onClick={() => {}}>Caption</OutlineButton>
    );

    expect(component).toMatchSnapshot();
  });
});
