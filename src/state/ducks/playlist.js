import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  setLoading: ['loading'],
  setFilters: ['filters'],
  setFeaturedPlaylists: ['payload'],
})

const INITIAL_STATE = { loading: false, playlists: {}, filters: [], message: '' }

const setLoading = (state = INITIAL_STATE, { loading }) => ({ ...state, loading })
const setFilters = (state = INITIAL_STATE, { filters }) => ({ ...state, filters })
const setFeaturedPlaylists = (state = INITIAL_STATE, { payload }) => {
  const { message, playlists } = payload

  return { ...state, message, playlists }
}

export default createReducer(INITIAL_STATE, {
  [Types.SET_LOADING]: setLoading,
  [Types.SET_FILTERS]: setFilters,
  [Types.SET_FEATURED_PLAYLISTS]: setFeaturedPlaylists,
})
