import { SagaIterator } from 'redux-saga'
import { all, fork } from 'redux-saga/effects'

import { counterWatchers } from '@features/counter/watchers'

const watchers = [...counterWatchers]

export function* rootSaga(): SagaIterator {
  yield all(watchers.map(fork))
}
