<template>
  <a :class="b()" to="/">
    <div :class="b('text')">
      {{ textLink }}
    </div>
    <Icon name="gold-arrow" />
  </a>
</template>

<script>
export default {
  name: "ArticleLinkBtn",
  props: {
    textLink: {
      type: String,
      default: () => 'Подробнее'
    },
  }
}
</script>

<style lang="scss" scoped>
.article-link-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  &__text {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    color: var(--link-color);
  }
}
</style>
