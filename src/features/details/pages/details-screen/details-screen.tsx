import React from 'react'

import { Center, Text, Button } from '@ui/atoms'
import { DetailsScreenNavigationProp } from '@navigation/.'

type Props = {
  navigation: DetailsScreenNavigationProp
}

export const DetailsScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <Center>
      <Text>Details Screen</Text>
      <Button title="go to home" onPress={() => navigation.navigate('Home')} />
    </Center>
  )
}
