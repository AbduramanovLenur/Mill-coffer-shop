<template>
  <main class="main">
    <BlogContent />
    <Mailing />
  </main>
</template>

<script>
import { useProductStore } from '@/store/ProductStore.js';

export default {
  name: "Blog",
  async asyncData({ $pinia  }) {
    const store = useProductStore($pinia);

    const fetchApi = [
      { url: 'https://news-content-6b2d0-default-rtdb.firebaseio.com/newsTab.json', name: 'tabNews'}
    ];

    if (store.tabNews.length === 0) {
      await store.fetchData(fetchApi[0]);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
