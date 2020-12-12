import React from 'react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'

import { ButtonHighlight } from './button-highlight'
import { Text } from '../'

storiesOf('ButtonHighlight', module)
  .add('with text', () => (
    <ButtonHighlight onPress={action('clicked-text')}>
      <Text>{text('Button text', 'Hello Button')}</Text>
    </ButtonHighlight>
  ))
  .add('with some emoji', () => (
    <ButtonHighlight onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </ButtonHighlight>
  ))
