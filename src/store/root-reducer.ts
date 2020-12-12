import { combineReducers } from 'redux'
import { StateType } from 'typesafe-actions'

import { newsReducer } from '@features/news/reducer'

export const rootReducer = combineReducers({
  news: newsReducer,
})

export type RootState = StateType<typeof rootReducer>
