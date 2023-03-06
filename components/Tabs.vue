<template>
  <ul :class="{ 'tabs': b(''), 'grid--3': grid3, 'grid--5': grid5, 'grid2': grid2}" :style="cssVars">
    <li :class="b('item')" v-for="item in tab" :key="item.id">
      <div :class="{ tabs__button: b('button'), isActive: item.isActive }" @click="setIsActiveTab(item.buttonName)">
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
    grid2: {
      type: Boolean,
      default: () => false
    },
    grid3: {
      type: Boolean,
      default: () => false
    },
    grid5: {
      type: Boolean,
      default: () => false
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
  display: grid;
  gap: 20px;
  margin-bottom: var(--px-margin);
  &.grid2 {
    grid-template-columns: repeat(2, 1fr);
  }
  &.grid--3 {
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 800px) {
      grid-template-columns: repeat(4, 1fr);
      --px-margin: 50px !important;
    }
    @media (max-width: 480px) {
      --px-margin: 40px !important;
    }
    .tabs__item {
      @media (max-width: 800px) {
        &:nth-child(1) {
          grid-column: 1 / 5;
        }

        &:nth-child(2) {
          grid-column: 1 / 3;
        }

        &:nth-child(3) {
          grid-column: 3 / 5;
        }
      }
    }
    .tabs__button {
      @media (max-width: 800px) {
        max-width: initial;
      }
      @media (max-width: 540px) {
        font-size: 18px;
        padding: 15px 10px;
      }
      @media (max-width: 384px) {
        font-size: 15px;
        padding: 15px 7px;
      }
    }
  }
  &.grid--5 {
    grid-template-columns: repeat(5, 1fr);
    @media (max-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
    .tabs__button {
      @media (max-width: 540px) {
        font-size: 18px;
      }
      @media (max-width: 384px) {
        font-size: 15px;
      }
    }
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
