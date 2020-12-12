import React from 'react'
import { TouchableHighlight } from 'react-native'

type Props = {
  onPress: () => void
}

export const ButtonHighlight: React.FC<Props> = ({ onPress, children }) => {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>
}
