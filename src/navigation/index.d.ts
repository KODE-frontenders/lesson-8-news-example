import { StackNavigationProp } from '@react-navigation/stack'

export type RootStackParamList = {
  Home: undefined
  Details: undefined
  Counter: undefined
}

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>

export type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>

export type CounterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Counter'
>
