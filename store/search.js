export const state = () => ({
  search: false
})

export const mutations = {
  SET_SEARCH(state) {
    state.search ? state.search = false : state.search = true;
  }
}

export const actions = {
  isActiveSearch({ commit }) {
    commit("SET_SEARCH");
  }
}

export const getters = {
  getSearch: state => state.search
}
