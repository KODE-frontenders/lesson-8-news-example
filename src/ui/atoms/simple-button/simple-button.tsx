import React from 'react'
import { ActivityIndicator } from 'react-native'

import { styled } from '@ui/theme'
import { useTheme } from '@shared/hooks'

export const Wrapper = styled.TouchableOpacity`
  height: 48px;
  padding: 14px 18px;
  background-color: ${({ theme }) => theme.colors.background.button};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
`

type Props = {
  isLoading?: boolean
  onPress: () => void
}

export const SimpleButton: React.FC<Props> = ({
  isLoading,
  children,
  onPress,
}) => {
  const theme = useTheme()
  return (
    <Wrapper onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.foreground.white} />
      ) : (
        children
      )}
    </Wrapper>
  )
}
