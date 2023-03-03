<template>
  <li :class="b('')">
    <div :class="b('box')">
      <div :class="b('question')">
        {{ accordion.question[$i18n.locale] }}
      </div>
      <div :class="b('answer')">
        {{ accordion.answer[$i18n.locale] }}
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "FaqItem",
  props: {
    accordion: {
      type: Object,
      default: () => { }
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
    padding: 40px 90px 40px 50px;
  }
  &__question {
    font-weight: 600;
    line-height: 1.3;
    max-width: 821px;
  }
  &__answer {
    font-size: 20px;
    line-height: 1.3;
    color: #222222;
    max-width: 805px;
  }
}
</style>
