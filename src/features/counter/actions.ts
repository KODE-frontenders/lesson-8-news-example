import { createAction } from 'typesafe-actions'

export const increment = createAction('INCREMENT')()
export const decrement = createAction('DECREMENT')()
