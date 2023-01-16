<template>
  <ul :class="b('')">
    <li :class="b('item')" v-for="grain in grains" :key="grain">
      <Icon name="grain" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "Grains",
  props: {
    grains: {
      type: Number,
      default: () => 0
    }
  }
}
</script>

<style lang="scss" scoped>
.grains {
  display: flex;
  max-width: 130px;
  gap: 7px;
}
</style>
