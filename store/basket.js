const state = () => ({
  basket: []
})

const mutations = {
  SET_CARD_BASKET(state, cart) {
    if (state.basket.length) {
      let isProductExist = false;
      state.basket.forEach(item => {
        if (item.id === cart.id) {
          isProductExist = true;
        }
      });

      if (!isProductExist) {
        state.basket.unshift(cart);
      }
    } else {
      state.basket.unshift(cart);
    }
  },
  REMOVE_CART_BASKET(state, index) {
    state.basket.splice(index, 1);
  },
  REMOVE_ALL_CART(state) {
    state.basket = [];
  },
  ICREMENT_QUANTITY(state, index) {
    const price = state.basket[index].price / state.basket[index].quantity

    state.basket[index].quantity++;
    state.basket[index].price = price * state.basket[index].quantity;
  },
  DECREMENT_QUANTITY(state, index) {
    if (state.basket[index].quantity > 1) {
      const price = state.basket[index].price / state.basket[index].quantity

      state.basket[index].quantity--;
      state.basket[index].price = price * state.basket[index].quantity;
    }
  }
}

const actions = {
  addCartToBasket({ commit }, cart) {
    commit("SET_CARD_BASKET", cart);
  },
  deleteCartFromBasket({ commit }, index) {
    commit('REMOVE_CART_BASKET', index);
  },
  deleteAllCart({ commit }) {
    commit('REMOVE_ALL_CART');
  },
  icrementQuantity({commit}, index) {
    commit('ICREMENT_QUANTITY', index);
  },
  decrementQuantity({commit}, index) {
    commit('DECREMENT_QUANTITY', index);
  }
}

const getters = {
  getBasketCart: state => state.basket,
  getQuantityBasket: state => state.basket.length
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}




// Пример как можно передать модули в NUXT
// An example of how modules can be passed to NUXT

// import Vuex from 'vuex';
// import api from './api.js';

// export default {
  // modules: {
  //   api: api
  // },
//   namespaced: true,
//   state,
//   mutations,
//   actions,
//   getters
// }
