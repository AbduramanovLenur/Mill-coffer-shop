<template>
  <li :class="b('')">
    <div :class="{'instruction-tab__box': b('box'), 'isActive': tab.isActive}" @click="$emit('setIsActiveTab', tab.buttonName)">
      <h4 :class="b('title')">
        {{ tab.title[$i18n.locale] }}
      </h4>
      <div :class="b('picture')">
        <Icon :name="tab.images" />
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "InstructionTab",
  props: {
    tab: {
      type: Object,
      default: () => { }
    }
  }
}
</script>

<style lang="scss" scoped>
.instruction-tab {
  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
  &__box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 30px rgba(149, 149, 149, 0.25);
    border-radius: 20px;
    max-width: 190px;
    width: 100%;
    height: 100%;
    padding: 28px 15px;
    cursor: pointer;
    @media (max-width: 1024px) {
      padding: 20px 15px;
    }
    @media (max-width: 480px) {
      padding: 15px;
    }
    &.isActive {
      background-color: #F9B300;
      .instruction-tab__title {
        color: #fff;
      }
      ::v-deep .instruction-tab__picture {
        svg path {
          fill: #fff;
        }
      }
    }
  }
  &__title {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.15;
    margin-bottom: 20px;
    text-align: center;
    cursor: pointer;
    @media (max-width: 1024px) {
      margin-bottom: 15px;
      font-size: 14px;
    }
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
}
</style>
