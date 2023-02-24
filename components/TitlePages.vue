<template>
  <h2 :class="b('')" :style="cssVars">
    <slot></slot>
  </h2>
</template>

<script>
export default {
  name: "TitlePages",
  props: {
    pxMargin: {
      type: Number,
      default: () => 0
    },
    maxWidth: {
      type: Number,
      default: () => 0
    },
  },
  computed: {
    cssVars() {
      return {
        '--px-margin': `${this.pxMargin}px`,
        '--max-width': `${this.maxWidth}px`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.title-pages {
  font-size: 70px;
  font-weight: 900;
  line-height: 1.24;
  color: #FFFFFF;
  margin-bottom: var(--px-margin);
  max-width: var(--max-width);
  @media (max-width: 768px) {
    font-size: 50px;
  }
  @media (max-width: 600px) {
    --px-margin: 50px !important;
  }
  @media (max-width: 480px) {
    --px-margin: 30px !important;
    font-size: 30px;
  }
}
</style>
