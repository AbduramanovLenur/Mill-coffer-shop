<template>
  <main class="main main-bg">
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
    const fetchApi = [
      { url: 'https://mill-cart-promotion-default-rtdb.firebaseio.com/promo.json', nameSetFunction: 'SET_PROMO' },
      { url: 'https://news-content-6b2d0-default-rtdb.firebaseio.com/news.json', nameSetFunction: 'SET_ARTICLE' }
    ];

    if (store.getters['product/getPromo'].length === 0) {
      await store.dispatch('product/fetch', fetchApi[0]);
    }

    if (Object.keys(store.getters['product/getArticleContent']).length === 0) {
      await store.dispatch('product/fetch', fetchApi[1]);
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
