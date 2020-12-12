import React from 'react'

import { Center, Text, Button } from '@ui/atoms'
import { HomeScreenNavigationProp } from '@navigation/.'

type Props = {
  navigation: HomeScreenNavigationProp
}

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <Center>
      <Text>Home Screen</Text>
      <Button
        title="go to details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="go to counter"
        onPress={() => navigation.navigate('Counter')}
      />
    </Center>
  )
}