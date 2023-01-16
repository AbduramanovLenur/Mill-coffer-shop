export const state = () => ({
  promo: []
})

export const mutations = {
  SET_PROMO(state, promo) {
    state.promo = promo;
  }
}

export const actions = {
  async fetchPromo({ commit }) {
    try {
      const response = await this.$axios.$get('https://mill-cart-promotion-default-rtdb.firebaseio.com/promo.json');

      commit('SET_PROMO', response);
    } catch (error) {
      console.log(error);
    }
  }
}

export const getters = {
  getPromo: state => state.promo
}
