import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type RootStackParamList = {
  Home: undefined
  News: undefined
  NewsDetails: { id: number }
}

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>

export type NewsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'News'
>

export type NewsDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'NewsDetails'
>

export type NewsDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'NewsDetails'
>
