<template>
  <main class="main">
    <TeaProduct />
    <Mailing />
  </main>
</template>

<script>
export default {
  name: "Tea",
  async asyncData({ store }) {
    const fetchApi = [
      { url: 'https://health-eat-top-default-rtdb.firebaseio.com/tea-top.json', nameSetFunction: 'SET_TEA_CATALOG'},
      { url: 'https://health-eat-top-default-rtdb.firebaseio.com/tea-bottom.json', nameSetFunction: 'SET_TEA_PRODUCT'}
    ];

    if (store.getters['product/getTeaCatalog'].length === 0) {
      await store.dispatch('product/fetch', fetchApi[0]);
    }

    if (store.getters['product/getTeaProduct'].length === 0) {
      await store.dispatch('product/fetch', fetchApi[1]);
    }
  }
}
</script>

<style lang="scss" scoped></style>
