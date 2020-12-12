import React from 'react'
import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'
import styled from 'styled-components/native'

// @ts-ignore
import { loadStories } from './storyLoader'

import './rn-addons'

const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`

// enables knobs for all stories
addDecorator((story: any) => <Center>{story()}</Center>)
addDecorator(withKnobs)

// import stories
configure(() => {
  loadStories()
}, module)

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
})

export default StorybookUIRoot
