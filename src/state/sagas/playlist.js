import { createActions } from 'reduxsauce'
import { put, call, takeEvery } from 'redux-saga/effects'

import { Creators as PlaylistCreators } from 'state/ducks/playlist'
import { SAGAS_PREFIX } from 'settings/constants'

import PlaylistService from 'services/playlist'

export const { Types, Creators } = createActions(
  {
    getFeaturedPlaylists: [''],
  },
  { prefix: SAGAS_PREFIX }
)

function* getFeaturedPlaylists() {
  try {
    yield put(PlaylistCreators.setLoading(true))
    const featuredPlaylists = yield call(PlaylistService.getFeaturedPlaylists)
    yield put(PlaylistCreators.setFeaturedPlaylists(featuredPlaylists))
  } catch (e) {
  } finally {
    yield put(PlaylistCreators.setLoading(false))
  }
}

export default [takeEvery(Types.GET_FEATURED_PLAYLISTS, getFeaturedPlaylists)]
