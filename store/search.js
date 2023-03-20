const state = () => ({
  search: false
})

const mutations = {
  SET_SEARCH(state) {
    state.search ? state.search = false : state.search = true;
  }
}

const actions = {
  isActiveSearch({ commit }) {
    commit("SET_SEARCH");
  }
}

const getters = {
  getSearch: state => state.search
}

export default {
  state,
  mutations,
  actions,
  getters
}
