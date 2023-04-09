<template>
  <main class="main">
    <CoffeeProduct />
    <Mailing />
  </main>
</template>

<script>
import { useProductStore } from '@/store/ProductStore.js';

export default {
  name: "Coffee",
  async asyncData({ $pinia }) {
    const store = useProductStore($pinia);

    const fetchApi = [
      { url: 'https://health-eat-top-default-rtdb.firebaseio.com/coffee-bottom.json', name: 'coffeeProduct' }
    ];

    if (store.coffeeProduct.length === 0) {
      await store.fetchData(fetchApi[0]);
    }
  }
}
</script>

<style lang="scss" scoped></style>
