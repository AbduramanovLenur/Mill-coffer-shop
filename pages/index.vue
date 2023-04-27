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
import { useProductStore } from '@/store/ProductStore.js';

export default {
  name: 'IndexPage',
  async asyncData({ $pinia }) {
    const store = useProductStore($pinia);

    const fetchApi = [
      { url: 'https://mill-cart-promotion-default-rtdb.firebaseio.com/promo.json', name: 'promo'},
      { url: 'https://news-content-6b2d0-default-rtdb.firebaseio.com/news.json', name: 'article' }
    ];

    if (store.promo.length === 0) {
      await store.fetchData(fetchApi[0]);
    }

    if (Object.keys(store.article).length === 0) {
      await store.fetchData(fetchApi[1]);
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
