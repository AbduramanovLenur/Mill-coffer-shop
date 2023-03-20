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

    if (store.getters['product/getVendingCatalog'].length === 0) {
      await store.dispatch('product/fetch', fetchApi[0]);
    }

    if (store.getters['product/getVendingProduct'].length === 0) {
      await store.dispatch('product/fetch', fetchApi[1]);
    }
  }
}
</script>

<style lang="scss" scoped></style>
