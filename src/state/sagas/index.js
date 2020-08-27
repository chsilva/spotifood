import { all } from 'redux-saga/effects'

import PlaylistSagas from 'state/sagas/playlist'

function* sagas() {
  yield all([...PlaylistSagas])
}

export default sagas
