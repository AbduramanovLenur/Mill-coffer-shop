<template>
  <div :class="b()">
    <div :class="b('picture')">
      <img :src="require()" alt="picture">
    </div>
    <div :class="b('content')">
      <h3 :class="b('title')"></h3>
      <p :class="b('text')"></p>
      <ArticleLinkBtn />
    </div>
  </div>
</template>

<script>

export default {
    name: "ArticleItemBig"
}
</script>

<style lang="scss" scoped>

</style>
