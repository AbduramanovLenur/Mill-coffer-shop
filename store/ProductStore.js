const state = () => ({
  promo: [],
  healthProduct: [],
  vendingProduct: [],
  teaProduct: [],
})

const mutations = {
  SET_ACTIVE_CLASS_BUTTON(state, { id, string, clearAll }) {
    const stateKeysArrays = Object.keys(state).filter((key) => {
      const keys = key !== 'article' && key !== 'healthCatalog' && key !== 'vendingCatalog' && key !== 'teaCatalog' && key !== 'tabNews';
      if (keys) return key;
    });

    stateKeysArrays.forEach((key) => {
      const stateKeys = state[key];

      if (clearAll === 'clear') {
        stateKeys.forEach(elem => elem.isBasketActive = false);
      }

      const element = stateKeys.find((obj) => obj.id === id);

      if (element) {
        if (string === 'basket') {
          element.isBasketActive = true;
        } else {
          element.isBasketActive = false;
        }
      }
    });
  }
}

const actions = {
  addActiveClassButton({ commit }, { id, string, clearAll }) {
    commit('SET_ACTIVE_CLASS_BUTTON', { id, string, clearAll });
  }
}


import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    product: [],
    promo: [],
    article: {},
    healthCatalog: [],
    healthProduct: [],
    vendingCatalog: [],
    vendingProduct: [],
    teaCatalog: [],
    teaProduct: [],
    tabNews: [],
    coffeeProduct: []
  }),
  getters: {},
  actions: {
    async fetchData({url, name}) {
      try {
        const response = await axios.get(url);
        let value = [];
        if (name !== 'article') value = [...response.data]
        else value = {...response.data}

        this[name] = value;
      } catch (error) {
        console.dir(error)
      }
    },
    async productPayment(
      { name, country, surname, city, phone, streetHouse, email, postcode, companyName, orderComment, fullPrice, product, bank }
    ) {
      try {
        const response = await axios.post('https://post-order-apple-shop-default-rtdb.firebaseio.com/:order.json', {
          name: name,
          surname: surname,
          country: country,
          city: city,
          phone: phone,
          streetHouse: streetHouse,
          email: email,
          postcode: postcode,
          companyName: companyName,
          orderComment: orderComment,
          fullPrice: fullPrice,
          product: product,
          bank: bank
        })

        return response.message;
      } catch (error) {
        // this.$toast.error(error?.response?.data?.message);
        console.dir(error);
      }
    }
  }
});
