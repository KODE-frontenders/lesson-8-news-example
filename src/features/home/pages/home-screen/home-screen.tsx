import React from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@store/.'
import { useTheme } from '@shared/hooks'
import { triggerNews, resetNews } from '@features/news/actions'
import { HomeScreenNavigationProp } from '@navigation/.'
import { Heading, PrimaryText, SecondaryText } from '@ui/typography'
import { Center, SimpleButton } from '@ui/atoms'
import { styled } from '@ui/theme'

const Wrapper = styled.View`
  padding: 72px 16px 0;
  background-color: ${({ theme }) => theme.colors.background.primary};
  flex-grow: 1;
`
const StyledHeading = styled(Heading)`
  margin-bottom: 24px;
`
const Input = styled.TextInput`
  height: 48px;
  padding: 12px 16px;
  margin-bottom: 24px;
  border: 2px solid ${({ theme }) => theme.colors.background.border};
  border-radius: 8px;
  overflow: hidden;
`
const StyledText = styled(SecondaryText)`
  margin-bottom: 64px;
`
const StyledButtonText = styled(PrimaryText)`
  font-family: ${({ theme }) => theme.fontFamily.openSansBold};
`

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
})

type Props = {
  navigation: HomeScreenNavigationProp
}

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch()
  const theme = useTheme()
  const { isFetching, data } = useSelector((state: RootState) => state.news)
  const initialData = React.useRef(data)

  React.useEffect(() => {
    if (data && initialData.current !== data) {
      navigation.navigate('News')
    }
  }, [data])

  const onPressCallback = React.useCallback(() => {
    if (data) {
      navigation.navigate('News')
    } else {
      dispatch(triggerNews())
    }
  }, [data])

  return (
    <KeyboardAvoidingView
      style={styles.keyboardView}
      contentContainerStyle={styles.keyboardView}
      behavior={Platform.OS === 'ios' ? 'position' : undefined}
    >
      <Wrapper>
        <StyledHeading>Введите код</StyledHeading>
        <Input placeholder="Ваш код" />
        <StyledText>
          Включите вход по одноразовому коду, чтобы не запоминать пароль. Для
          входа в аккаунт мы будем отправлять код в СМС или push-уведомлении.
          Если под рукой не будет телефона, чтобы получить код, вы сможете войти
          в аккаунт по постоянному паролю
        </StyledText>
        <Center>
          <SimpleButton onPress={onPressCallback} isLoading={isFetching}>
            <StyledButtonText color={theme.colors.foreground.white}>
              Продолжить
            </StyledButtonText>
          </SimpleButton>
        </Center>
        <Center>
          <SimpleButton onPress={() => dispatch(resetNews())}>
            <StyledButtonText color={theme.colors.foreground.white}>
              Сбросить news для дебага
            </StyledButtonText>
          </SimpleButton>
        </Center>
      </Wrapper>
    </KeyboardAvoidingView>
  )
}
