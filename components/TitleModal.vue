<template>
  <h3 :class="b('')" :style="cssVars">
    <slot></slot>
  </h3>
</template>

<script>
export default {
  name: "TitleModal",
  props: {
    pxMargin: {
      type: Number,
      default: () => 0
    }
  },
  computed: {
    cssVars() {
      return {
        '--px-margin': `${this.pxMargin}px`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.title-modal {
  font-size: 35px;
  font-weight: 900;
  line-height: 1.25;
  margin-bottom: var(--px-margin);
  max-width: 410px;
  text-align: center;
  @media (max-width: 480px) {
    --px-margin: 20px !important;
    font-size: 28px;
  }
}
</style>
