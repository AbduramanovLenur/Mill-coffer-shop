<template>
  <main class="main">
    <HealthProduct />
    <Mailing />
  </main>
</template>

<script>
export default {
  name: "Health",
  async asyncData({ store }) {
    const fetchApi = [
      { url: 'https://health-eat-top-default-rtdb.firebaseio.com/product-top.json', nameSetFunction: 'SET_HEALTH_CATALOG'},
      { url: 'https://health-eat-top-default-rtdb.firebaseio.com/product-bottom.json', nameSetFunction: 'SET_HEALTH_PRODUCT'}
    ];

    if (store.getters['api/getHealthCatalog'].length === 0) {
      await store.dispatch('api/fetch', fetchApi[0]);
    }

    if (store.getters['api/getHealthProduct'].length === 0) {
      await store.dispatch('api/fetch', fetchApi[1]);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
