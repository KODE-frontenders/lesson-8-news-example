import { SagaIterator } from 'redux-saga'
import { delay, put, takeEvery } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'

import * as actions from './actions'
import { mockNews } from './mock'

function* worker(action: ActionType<typeof actions>): SagaIterator {
  console.log('Started worker:', { action })
  yield put(actions.startLoadingNews())
  yield delay(1500)
  yield put(actions.updateNews({ news: mockNews }))
  yield put(actions.finishLoadingNews())
}

export function* newsWatcher(): SagaIterator {
  yield takeEvery([actions.triggerNews], worker)
}
