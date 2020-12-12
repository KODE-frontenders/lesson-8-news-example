import { SagaIterator } from 'redux-saga'
import { takeEvery } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'

import * as actions from './actions'

function* worker(action: ActionType<typeof actions>): SagaIterator {
  console.log('saga middleware catched counter action:', { action })
}

export function* counterWatcher(): SagaIterator {
  yield takeEvery([actions.increment, actions.decrement], worker)
}
