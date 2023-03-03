export const state = () => ({
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

export const mutations = {
  SET_PROMO(state, promo) {
    state.promo = promo;
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
  }
}

export const actions = {
  async fetch({ commit }, { url, nameSetFunction }) {
    try {
      const response = await this.$axios.$get(url);

      commit(nameSetFunction, response);
    } catch (error) {
      console.log(error);
    }
  }
}

export const getters = {
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
