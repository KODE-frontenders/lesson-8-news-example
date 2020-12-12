import React from 'react'

import { Center, Text } from '@ui/atoms'
import { HomeScreenNavigationProp } from '@navigation/.'

type Props = {
  navigation: HomeScreenNavigationProp
}

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <Center>
      <Text>Home</Text>
    </Center>
  )
}
