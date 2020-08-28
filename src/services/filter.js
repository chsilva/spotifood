import axios from 'axios'
import { FILTER_ENDPOINT } from 'settings/constants'

export default {
  getFilters: async () => {
    const { data } = await axios.get(FILTER_ENDPOINT)
    const { filters } = data

    return filters
  },
}
