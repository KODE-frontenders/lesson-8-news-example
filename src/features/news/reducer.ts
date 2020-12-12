import { createReducer, ActionType } from 'typesafe-actions'

import * as actions from './actions'
import { TNewsItem } from './types'

export type TNewsAction = ActionType<typeof actions>
export type TNewsState = {
  data: TNewsItem[] | null
  isFetching?: boolean
}

const initialState: TNewsState = {
  data: null,
}

export const newsReducer = createReducer<TNewsState, TNewsAction>(initialState)
  .handleAction(actions.updateNews, (state, action) => ({
    ...state,
    data: action.payload.news,
  }))
  .handleAction(actions.startLoadingNews, (state) => ({
    ...state,
    isFetching: true,
  }))
  .handleAction(actions.finishLoadingNews, (state) => ({
    ...state,
    isFetching: false,
  }))
  .handleAction(actions.resetNews, () => initialState)
