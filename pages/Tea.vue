<template>
  <main class="main">
    <TeaProduct />
    <Mailing />
  </main>
</template>

<script>
import { useProductStore } from '@/store/ProductStore.js';

export default {
  name: "Tea",
  async asyncData({ $pinia  }) {
    const store = useProductStore($pinia);

    const fetchApi = [
      { url: 'https://health-eat-top-default-rtdb.firebaseio.com/tea-top.json', name: 'teaCatalog'},
      { url: 'https://health-eat-top-default-rtdb.firebaseio.com/tea-bottom.json', name: 'teaProduct'}
    ];

    if (store.teaCatalog.length === 0) {
      await store.fetchData(fetchApi[0]);
    }

    if (store.teaProduct.length === 0) {
      await store.fetchData(fetchApi[1]);
    }
  }
}
</script>

<style lang="scss" scoped></style>
