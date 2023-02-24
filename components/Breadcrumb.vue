<template>
  <ul :class="b('list')" :style="cssVars">
    <li :class="b('item')" v-for="item in breadcrumbs" :key="item.id">
      <nuxt-link :class="b('link')" :to="item.link">
        {{ item.text }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: {
    breadcrumbs: {
      type: Array,
      default: () => []
    },
    pxMargin: {
      type: Number,
      default: () => 0
    },
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
.breadcrumb {
  &__list {
    display: flex;
    align-items: center;
    margin-bottom: var(--px-margin);
    @media (max-width: 768px) {
      --px-margin: 40px !important;
    }
    @media (max-width: 480px) {
      --px-margin: 25px !important;
    }
    @media (max-width: 360px) {
      --px-margin: 15px !important;
    }
  }
  &__item {
    display: flex;
    align-items: center;
    &:not(:last-child) {
      @media (max-width: 480px) {
        display: none;
      }
      &:after {
        content: ">";
        font-size: 18px;
        font-weight: 500;
        color: #fff;
        margin-right: 5px;
        margin-left: 5px;
      }
    }
  }
  &__link {
    font-size: 18px;
    font-weight: 500;
    color: #fff;
  }
}
</style>
