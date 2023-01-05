<template>
  <section :class="b()">
    <div class="container">
      <div :class="b('inner')">
        <Title :pxMargin="60" :maxWidth="450">
          Новости компании
        </Title>
        <div :class="b('wrapper')">
          <!-- <ArticleItemBig />
          <ArticleItemSmall />
          <ArticleItemSmall />
          <ArticleItemBig /> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ArticleList",
  computed: {
    article() {
      return this.$store.getters['article-api/getArticleContent'];
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
