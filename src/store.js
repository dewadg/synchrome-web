import { Store } from 'vuex'
import modules from './stores'

const store = new Store({
  strict: process.env.NODE_ENV !== 'production',
  modules
})

export default store
