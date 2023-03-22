const state = () => ({
  basket: [],
  product: [],
  total: 0
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
        state.product.push({
          title: cart.title,
          subtitle: cart.subtitle,
          quantity: cart.quantity,
          price: cart.price * cart.quantity,
          gram: cart.gram
        });
      }
    } else {
      state.basket.unshift(cart);
      state.product.push({
        title: cart.title,
        subtitle: cart.subtitle,
        quantity: cart.quantity,
        price: cart.price,
        gram: cart.gram
      });
    }
  },
  REMOVE_CART_BASKET(state, index) {
    state.basket.splice(index, 1);
  },
  REMOVE_ALL_CART(state) {
    state.basket = [];
    state.product = [];
  },
  ICREMENT_QUANTITY(state, index) {
    state.basket[index].quantity++;
    state.product[index].quantity++;
  },
  DECREMENT_QUANTITY(state, index) {
    if (state.basket[index].quantity > 1) {
      state.basket[index].quantity--;
      state.product[index].quantity--;
    }
  },
  SET_TOTAL(state, total) {
    state.total = total;
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
  },
  addTotalPrice({commit}, total) {
    commit('SET_TOTAL', total);
  }
}

const getters = {
  getBasketCart: state => state.basket,
  getQuantityBasket: state => state.basket.length,
  getPrice: state => state.total,
  getProduct: state => state.product
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
