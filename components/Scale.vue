<template>
  <ul :class="b('')">
    <li :class="b('item')" v-for="item in scale" :key="'scale' + item">
      <div :class="b('circle-orange')"></div>
    </li>
    <li :class="b('item')" v-for="item in maxScale - scale" :key="'maxScale' + item">
      <div :class="b('circle-gray')"></div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Scale",
  props: {
    scale: {
      type: Number,
      default: () => 0
    },
    maxScale: {
      type: Number,
      default: () => 0
    }
  }
}
</script>

<style lang="scss" scoped>
.scale {
  display: flex;
  max-width: 130px;
  gap: 3px;
  &__circle {
    &-orange,
    &-gray {
      height: 10px;
      width: 10px;
      border-radius: 50%;
    }
    &-orange {
      background-color: #F9B300;
    }
    &-gray {
      background-color: #F0F0F0;
    }
  }
}
</style>
