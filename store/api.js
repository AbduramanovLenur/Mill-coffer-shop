export const state = () => ({
  promo: [],
  article: {},
  healthCatalog: [],
  healthProduct: []
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
  getHealthProduct: state => state.healthProduct
}
