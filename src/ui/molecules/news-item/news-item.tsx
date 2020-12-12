import React from 'react'

import { IconPerson } from '@ui/atoms'
import { styled } from '@ui/theme'
import { Heading, PrimaryText, SecondaryText } from '@ui/typography'

const Wrapper = styled.View`
  padding: 16px;
  background-color: #fff;
`
const StyledHeading = styled(Heading)`
  flex: 1;
  padding-right: 16px;
`
const StyledText = styled(PrimaryText)`
  margin-bottom: 12px;
`
const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 10px;
`
const AuthorWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`
const AuthorText = styled(SecondaryText)`
  margin-left: 6px;
`

type Props = {
  title: string
  time: string
  author: string
  text: string
}

export const NewsItem: React.FC<Props> = ({ time, title, author, text }) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <StyledHeading>{title}</StyledHeading>
        <SecondaryText>{time}</SecondaryText>
      </TitleWrapper>
      <AuthorWrapper>
        <IconPerson />
        <AuthorText>{author}</AuthorText>
      </AuthorWrapper>
      <StyledText>{text}</StyledText>
    </Wrapper>
  )
}
