export const state = () => ({
  all: [],
  current: {}
})

export const actions = {
  async fetchChangelogs ({commit, dispatch}) {
    let changelogs = await this.$axios.$get('/api/ota/changelog/')
    commit('setChangelogs', changelogs.results)
    if (!state.current)
      await dispatch('fetchChangelog', changelogs.results[0].version)
  },

  async fetchChangelog ({commit}, version) {
    let changelog = await this.$axios.$get(`/api/ota/changelog/${version}/`)
    commit('setChangelog', changelog)
  }
}

export const mutations = {
  setChangelog (state, changelog) {
    state.current = changelog
  },
  setChangelogs (state, changelogs) {
    state.all = changelogs
  }
}