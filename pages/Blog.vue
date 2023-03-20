<template>
  <main class="main">
    <BlogContent />
    <Mailing />
  </main>
</template>

<script>
export default {
  name: "Blog",
  async asyncData({ store }) {
    const fetchApi = [
      { url: 'https://news-content-6b2d0-default-rtdb.firebaseio.com/newsTab.json', nameSetFunction: 'SET_TAB_NEWS'}
    ];

    if (store.getters['product/getTabNews'].length === 0) {
      await store.dispatch('product/fetch', fetchApi[0]);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
