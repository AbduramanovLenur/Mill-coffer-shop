<template>
  <li :class="b('')">
    <div :class="{'faq-item__box': b('box'), 'open': open}" @click="$emit('toggleOpen', faq.id)">
      <div :class="b('content')">
        <div :class="b('question')">
          {{ faq.question[$i18n.locale] }}
        </div>
        <div :class="b('plus')"></div>
      </div>
      <div :class="b('answer')">
        {{ faq.answer[$i18n.locale] }}
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "FaqItem",
  props: {
    faq: {
      type: Object,
      default: () => { }
    },
    open: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style lang="scss" scoped>
.faq-item {
  max-width: 960px;
  width: 100%;
  &__box {
    box-shadow: 0px 0px 30px rgba(149, 149, 149, 0.25);
    border-radius: 20px;
    background-color: rgb(240, 233, 233);
    padding: 40px 45px 40px 50px;
    transition: 1s;
    cursor: pointer;
    @media (max-width: 800px) {
      padding: 30px;
    }
    @media (max-width: 480px) {
      padding: 20px;
    }
    &.open {
      .faq-item__content {
        margin-bottom: 40px;
        @media (max-width: 640px) {
          margin-bottom: 20px;
        }
      }
      .faq-item__answer {
        opacity: 1;
        max-height: initial;
        overflow-y: initial;
      }
      .faq-item__plus {
        &::after {
          transform: translateY(-50%) rotate(0deg);
        }
      }
    }
  }
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
  }
  &__question {
    font-weight: 600;
    line-height: 1.3;
    max-width: 821px;
    @media (max-width: 640px) {
      font-size: 20px;
    }
    @media (max-width: 480px) {
      font-size: 18px;
    }
  }
  &__plus {
    position: relative;
    height: 20px;
    width: 20px;
    &::after, &::before {
      content: "";
      position: absolute;
      top: 50%;
      right: 0;
      background-color: #000000;
      border-radius: 20px;
      width: 20px;
      height: 3px;
    }
    &::after {
      transform: translateY(-50%) rotate(90deg);
    }
    &::before {
      transform: translateY(-50%);
    }
  }
  &__answer {
    font-size: 20px;
    line-height: 1.3;
    color: #222222;
    max-width: 805px;
    opacity: 0;
    max-height: 0;
    overflow-y: hidden;
    transition: all 1s ease-out;
    @media (max-width: 640px) {
      font-size: 17px;
    }
    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
}</style>
