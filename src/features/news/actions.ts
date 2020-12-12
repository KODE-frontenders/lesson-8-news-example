import { createAction } from 'typesafe-actions'

import { TNewsItem } from './types'

export const triggerNews = createAction('TRIGGER_NEWS')()

export const startLoadingNews = createAction('START_LOADING_NEWS')()

export const finishLoadingNews = createAction('FINISH_LOADING_NEWS')()

export const updateNews = createAction('UPDATE_NEWS')<{
  news: TNewsItem[]
}>()
