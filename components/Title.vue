<template>
  <h2 :class="b()" :style="cssVars">
    <slot></slot>
  </h2>
</template>

<script>
export default {
  name: "Title",
  props: {
    fzColor: {
      type: String,
      default: () => '#000'
    },
    pxMargin: {
      type: Number,
      default: () => ''
    },
    maxWidth: {
      type: Number,
      default: () => ''
    }
  },
  computed: {
    cssVars() {
      return {
        '--fz-color': `#${this.fzColor}`,
        '--px-margin': `${this.pxMargin}px`,
        '--max-width': `${this.maxWidth}px`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: var(--title-fz);
  font-weight: 900;
  line-height: 1.24;
  color: var(--fz-color);
  margin-bottom: var(--px-margin);
  max-width: var(--max-width);
  @media (max-width: 960px) {
    font-size: 40px;
    margin-bottom: 50px;
  }
  @media (max-width: 600px) {
    font-size: 35px;
    margin-bottom: 30px;
  }
  @media (max-width: 540px) {
    text-align: center;
  }
}
</style>
