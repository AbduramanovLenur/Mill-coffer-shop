<template>
  <main class="main">
    <Intro />
    <Catalog />
    <Product />
    <div class="background-group">
      <Benefits />
      <Roasting />
    </div>
    <ArticleList />
    <Mailing />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ store }) {
    if (Object.keys(store.getters['article-api/getArticleContent']).length === 0) {
      await store.dispatch('article-api/fetchArticle');
    }

    if (store.getters['promo-api/getPromo'].length === 0) {
      await store.dispatch('promo-api/fetchPromo');
    }
  }
}
</script>
<style lang="scss">
.background-group {
  background-image: url("@/assets/images/background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (max-width: 1152px) {
    background-image: none;
  }
}
</style>
