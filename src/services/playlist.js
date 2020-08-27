import axios from 'axios'
import { LS_ACCESS_TOKEN_KEY, LS_TOKEN_TYPE_KEY, FEATURED_PLAYLISTS_ENDPOINT } from 'settings/constants'

export default {
  getFeaturedPlaylists: async () => {
    const access_token = localStorage.getItem(LS_ACCESS_TOKEN_KEY)
    const token_type = localStorage.getItem(LS_TOKEN_TYPE_KEY)
    const headers = { authorization: `${token_type} ${access_token}` }

    const { data } = await axios.get(FEATURED_PLAYLISTS_ENDPOINT, { headers })

    return data
  },
}
