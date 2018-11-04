function emptyUser () {
  return {
    id: null,
    name: '',
    role: {
      id: null,
      name: ''
    },
    generatedAt: null
  }
}

const state = {
  user: emptyUser()
}

const mutations = {
  reset (state) {
    state.user = emptyUser()
  },

  set (state, data) {
    state.user = data
  }
}

const getters = {
  get (state) {
    return state.user
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
