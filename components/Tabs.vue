<template>
  <ul :class="b('')" :style="cssVars">
    <li :class="b('item')" v-for="item in tab" :key="item.id">
      <div :class="{tabs__button: b('button'), isActive: item.isActive}" @click="setIsActiveTab(item.buttonName)">
        {{ item.text[$i18n.locale] }}
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    tab: {
      type: Array,
      default: () => []
    },
    maxWidth: {
      type: Number,
      default: () => 0
    },
    pxMargin: {
      type: Number,
      default: () => 0
    }
  },
  methods: {
    setIsActiveTab(tab) {
      this.$emit('setIsActiveTab', tab);
    }
  },
  computed: {
    cssVars() {
      return {
        '--px-margin': `${this.pxMargin}px`,
        '--maxWidth': `${this.maxWidth}px`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  gap: 20px;
  margin-bottom: var(--px-margin);
  &__item {
    width: 100%;
  }
  &__button {
    font-weight: 600;
    line-height: 1.2;
    text-align: center;
    color: #F9B300;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: var(--maxWidth);
    width: 100%;
    padding: 15px;
    background-color: #F6F6F6;
    border: 1px solid #C9C9C9;
    border-radius: 5px;
    cursor: pointer;
    &.isActive {
      background-color: #FFF7E1;
    }
  }
}
</style>
