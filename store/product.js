const state = () => ({
  promo: [],
  article: {},
  healthCatalog: [],
  healthProduct: [],
  vendingCatalog: [],
  vendingProduct: [],
  teaCatalog: [],
  teaProduct: [],
  tabNews: []
})

const mutations = {
  SET_PROMO(state, promo) {
    state.promo = [...promo];
  },
  SET_ARTICLE(state, article) {
    state.article = article;
  },
  SET_HEALTH_CATALOG(state, healthCatalog) {
    state.healthCatalog = healthCatalog;
  },
  SET_HEALTH_PRODUCT(state, healthProduct) {
    state.healthProduct = healthProduct;
  },
  SET_VENDING_CATALOG(state, vendingCatalog) {
    state.vendingCatalog = vendingCatalog;
  },
  SET_VENDING_PRODUCT(state, vendingProduct) {
    state.vendingProduct = vendingProduct;
  },
  SET_TEA_CATALOG(state, teaCatalog) {
    state.teaCatalog = teaCatalog;
  },
  SET_TEA_PRODUCT(state, teaProduct) {
    state.teaProduct = teaProduct;
  },
  SET_TAB_NEWS(state, tabNews) {
    state.tabNews = tabNews;
  },
  SET_ACTIVE_CLASS_BUTTON(state, { id, string, clearAll }) {
    const stateKeysArrays = Object.keys(state).filter((key) =>  {
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
  async fetch({ commit }, { url, nameSetFunction }) {
    try {
      const response = await this.$axios.$get(url);

      commit(nameSetFunction, response);
    } catch (error) {
      this.$toast.error(error);
    }
  },
  async productPayment(
    {commit},
    {name, country, surname, city, phone, streetHouse, email, postcode, companyName, orderComment, fullPrice, product, bank}
    ) {
    try {
      const response = await this.$axios.$post('https://post-order-apple-shop-default-rtdb.firebaseio.com/:order.json', {
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

      this.$toast.success("Покупка оформлена");
      return response.message;
    } catch (error) {
      this.$toast.error(error?.response?.data?.message);
    }
  },
  addActiveClassButton({commit}, { id, string, clearAll }) {
    commit('SET_ACTIVE_CLASS_BUTTON', { id, string, clearAll });
  }
}

const getters = {
  getPromo: state => state.promo,
  getArticleContent: state => state.article,
  getHealthCatalog: state => state.healthCatalog,
  getHealthProduct: state => state.healthProduct,
  getVendingCatalog: state => state.vendingCatalog,
  getVendingProduct: state => state.vendingProduct,
  getTeaCatalog: state => state.teaCatalog,
  getTeaProduct: state => state.teaProduct,
  getTabNews: state => state.tabNews
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
