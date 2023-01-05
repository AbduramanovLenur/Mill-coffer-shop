export const state = () => ({
  article: {}
})

export const mutations = {
  SET_ARTICLE(state, article) {
    state.article = article;
  }
}

export const actions = {
  async fetchArticle({ commit }) {
    try {
      const response = await this.$axios.$get('https://news-content-6b2d0-default-rtdb.firebaseio.com/news.json');

      commit('SET_ARTICLE', response);
    } catch (error) {
      console.log(error);
    }
  }
}

export const getters = {
  getArticleContent: state => state.article
}
