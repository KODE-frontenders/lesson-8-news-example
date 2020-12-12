import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Center, Text, Button } from '@ui/atoms'
import { NewsItemScreenNavigationProp } from '@navigation/.'

import { RootState } from '../../../../store'
import * as actions from '../../../news/actions'

type Props = {
  navigation: NewsItemScreenNavigationProp
}

export const NewsItemScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <Center>
      <Text>Counter Screen</Text>
    </Center>
  )
}
