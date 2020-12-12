import React from 'react'

import { Center, Text, Button } from '@ui/atoms'
import { NewsScreenNavigationProp } from '@navigation/.'

type Props = {
  navigation: NewsScreenNavigationProp
}

export const NewsScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <Center>
      <Text>Список новостей</Text>
    </Center>
  )
}
