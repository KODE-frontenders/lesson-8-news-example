import React from 'react'

import { Center, Text } from '@ui/atoms'
import {
  NewsDetailsScreenNavigationProp,
  NewsDetailsScreenRouteProp,
} from '@navigation/.'

type Props = {
  navigation: NewsDetailsScreenNavigationProp
  route: NewsDetailsScreenRouteProp
}

export const NewsDetailsScreen: React.FC<Props> = ({ navigation, route }) => {
  return (
    <Center>
      <Text>Отдельная новость</Text>
    </Center>
  )
}
