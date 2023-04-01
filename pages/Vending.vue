<template>
  <main class="main">
    <VendingProduct />
    <Mailing />
  </main>
</template>

<script>
import { useProductStore } from '@/store/ProductStore.js';

export default {
  name: "Vending",
  async asyncData({ $pinia  }) {
    const store = useProductStore($pinia);

    const fetchApi = [
      { url: 'https://health-eat-top-default-rtdb.firebaseio.com/vending-top.json', name: 'vendingCatalog'},
      { url: 'https://health-eat-top-default-rtdb.firebaseio.com/vending-bottom.json', name: 'vendingProduct'}
    ];

    if (store.vendingCatalog.length === 0) {
      await store.fetchData(fetchApi[0]);
    }

    if (store.vendingProduct.length === 0) {
      await store.fetchData(fetchApi[1]);
    }
  }
}
</script>

<style lang="scss" scoped></style>
