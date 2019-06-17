import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import { OutlineButton, Textbox } from '../src/ui/elements';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('OutlineButton', module)
  .add('Gold Button', () => (
    <OutlineButton onClick={action('clicked')} type="gold">
      Gold Button
    </OutlineButton>
  ))
  .add('Dark Button', () => (
    <OutlineButton onClick={action('clicked')} type="dark">
      Dark Button
    </OutlineButton>
  ));

storiesOf('Textbox', module).add('Default', () => (
  <Textbox fieldName="fieldName" label="Field Label" required />
));
