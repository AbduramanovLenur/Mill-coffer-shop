export const state = () => ({
  isActiveClass: false
})

export const mutations = {
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

export const actions = {
  addActiveClass({ commit }) {
    commit("SET_CLASS_ACTIVE");
  }
}

export const getters = {
  getIsActiveClass: state => state.isActiveClass
}
