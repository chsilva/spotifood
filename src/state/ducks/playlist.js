import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  setFeaturedPlaylists: ['payload'],
  setLoading: ['loading'],
})

const INITIAL_STATE = { loading: false, playlists: {}, message: '' }

const setLoading = (state = INITIAL_STATE, { loading }) => ({ ...state, loading })
const setFeaturedPlaylists = (state = INITIAL_STATE, { payload }) => {
  const { message, playlists } = payload

  return { ...state, message, playlists }
}

export default createReducer(INITIAL_STATE, {
  [Types.SET_FEATURED_PLAYLISTS]: setFeaturedPlaylists,
  [Types.SET_LOADING]: setLoading,
})
