import React from 'react'

import { useTheme } from '@shared/hooks'
import { IconPerson } from '@ui/atoms'
import { Badge } from '@ui/atoms/badge/badge'
import { styled } from '@ui/theme'
import { Heading, PrimaryText, SecondaryText } from '@ui/typography'

const Wrapper = styled.TouchableOpacity`
  padding: 16px;
  background-color: #fff;
  margin-bottom: 1px;
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
const BadgeWrapper = styled.View`
  flex-direction: row;
`

type Props = {
  title: string
  time: string
  author: string
  text: string
  tag: string
  onPress: () => void
}

export const Card: React.FC<Props> = ({
  time,
  title,
  author,
  text,
  tag,
  onPress,
}) => {
  const theme = useTheme()
  return (
    <Wrapper onPress={onPress}>
      <TitleWrapper>
        <StyledHeading numberOfLines={2}>{title}</StyledHeading>
        <SecondaryText>{time}</SecondaryText>
      </TitleWrapper>
      <AuthorWrapper>
        <IconPerson />
        <AuthorText>{author}</AuthorText>
      </AuthorWrapper>
      <StyledText numberOfLines={2}>{text}</StyledText>
      <BadgeWrapper>
        <Badge>
          <SecondaryText color={theme.colors.foreground.badge}>
            {tag}
          </SecondaryText>
        </Badge>
      </BadgeWrapper>
    </Wrapper>
  )
}
