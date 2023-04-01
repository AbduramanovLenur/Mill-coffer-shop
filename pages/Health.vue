<template>
  <main class="main">
    <HealthProduct />
    <Mailing />
  </main>
</template>

<script>
import { useProductStore } from '@/store/ProductStore.js';

export default {
  name: "Health",
  async asyncData({ $pinia  }) {
    const store = useProductStore($pinia);

    const fetchApi = [
      { url: 'https://health-eat-top-default-rtdb.firebaseio.com/product-top.json', name: 'healthCatalog'},
      { url: 'https://health-eat-top-default-rtdb.firebaseio.com/product-bottom.json', name: 'healthProduct'}
    ];

    if (store.healthCatalog.length === 0) {
      await store.fetchData(fetchApi[0]);
    }

    if (store.healthProduct.length === 0) {
      await store.fetchData(fetchApi[1]);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
