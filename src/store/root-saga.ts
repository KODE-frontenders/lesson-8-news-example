import { SagaIterator } from 'redux-saga'
import { all, fork } from 'redux-saga/effects'

import { newsWatchers } from '@features/news/watchers'

const watchers = [...newsWatchers]

export function* rootSaga(): SagaIterator {
  yield all(watchers.map(fork))
}
