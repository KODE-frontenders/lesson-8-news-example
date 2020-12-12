import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Center, Text, Button } from '@ui/atoms'
import { CounterScreenNavigationProp } from '@navigation/.'

import { RootState } from '../../../../store'
import * as actions from '../../actions'

type Props = {
  navigation: CounterScreenNavigationProp
}

export const CounterScreen: React.FC<Props> = ({ navigation }) => {
  const counter = useSelector((state: RootState) => state.counter.counter)
  const dispatch = useDispatch()
  return (
    <Center>
      <Text>Counter Screen</Text>
      <Text>State: {counter}</Text>
      <Button title="increment" onPress={() => dispatch(actions.increment())} />
      <Button title="decrement" onPress={() => dispatch(actions.decrement())} />
    </Center>
  )
}
