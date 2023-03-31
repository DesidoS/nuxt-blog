export const state = () => ({
  token: true,
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  },
}

export const actions = {
  login({ commit, dispatch }, formData) {
    try {
      const { token } = this.$axios.$post('/api/auth/admin/login', formData)
      console.log('token', token)
      dispatch('setToken', token)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  createUser({ commit }, formData) {
    try {
      console.log('createUser', formData)
    } catch (e) {}
  },
  setToken({ commit }, token) {
    commit('setToken', token)
  },
  logout({ commit }) {
    commit('clearToken')
  },
}

export const getters = {
  isAuthenticated: (state) => Boolean(state.token),
}
