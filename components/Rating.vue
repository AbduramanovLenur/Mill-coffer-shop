<template>
  <ul :class="b('')">
    <li :class="b('star')" v-for="star in grade" :key="star">
      <Icon name="star" />
    </li>
    <li :class="b('empty-star')" v-for="star in maxStars - grade" :key="star">
      <Icon name="empty-star" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "Rating",
  props: {
    maxStars: {
      type: Number,
      default: () => 0
    },
    grade: {
      type: Number,
      default: () => 0
    }
  }
}
</script>

<style lang="scss" scoped>
.rating {
  display: flex;
  max-width: 133px;
}
</style>
