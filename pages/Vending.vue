<template>
  <main class="main">
    <VendingProduct />
    <Mailing />
  </main>
</template>

<script>
export default {
  name: "Vending",
  async asyncData({ store }) {
    const fetchApi = [
      { url: 'https://health-eat-top-default-rtdb.firebaseio.com/vending-top.json', nameSetFunction: 'SET_VENDING_CATALOG'},
      { url: 'https://health-eat-top-default-rtdb.firebaseio.com/vending-bottom.json', nameSetFunction: 'SET_VENDING_PRODUCT'}
    ];

    if (store.getters['api/getVendingCatalog'].length === 0) {
      await store.dispatch('api/fetch', fetchApi[0]);
    }

    if (store.getters['api/getVendingProduct'].length === 0) {
      await store.dispatch('api/fetch', fetchApi[1]);
    }
  }
}
</script>

<style lang="scss" scoped></style>
