import { createReducer, ActionType } from 'typesafe-actions'

import * as actions from './actions'

export type TCounterAction = ActionType<typeof actions>
export type TCounterState = {
  counter: number
}

const initialState: TCounterState = {
  counter: 0,
}

export const counterReducer = createReducer<TCounterState, TCounterAction>(
  initialState,
)
  .handleAction(actions.increment, (state) => ({
    counter: state.counter + 1,
  }))
  .handleAction(actions.decrement, (state) => ({
    counter: state.counter - 1,
  }))
