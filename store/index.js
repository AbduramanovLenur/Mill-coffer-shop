const state = () => ({
  isActiveClass: false
})

const mutations = {
  SET_CLASS_ACTIVE(state) {
    if (state.isActiveClass) {
      state.isActiveClass = false;
      document.body.style.overflowY = "scroll";
    } else {
      state.isActiveClass = true;
      document.body.style.overflowY = "hidden";
    }
  }
}

const actions = {
  addActiveClass({ commit }) {
    commit("SET_CLASS_ACTIVE");
  }
}

const getters = {
  getIsActiveClass: state => state.isActiveClass
}

export default {
  state,
  mutations,
  actions,
  getters
}
