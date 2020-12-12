import React from 'react'
import { styled } from '@ui/theme'

const Wrapper = styled.View`
  height: 32px;
  padding: 6px 24px;
  border-radius: 8px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.badge};
`

export const Badge: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}
