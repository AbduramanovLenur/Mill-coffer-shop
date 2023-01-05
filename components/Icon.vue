<template>
  <span :class="`icon-${name} icon-svg`" v-html="require(`../assets/images/svg/${name}.svg?raw`)" />
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true
    },
  }
}
</script>

<style lang="scss">
.icon-svg {
  display: inline-flex;
}
</style>
