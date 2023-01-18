<template>
  <section :class="b()">
    <div class="container">
      <div :class="b('inner')">
        <Title :class="b('title')" :pxMargin="50" :maxWidth="460">
          Товары со скидкой
        </Title>
        <p :class="b('text')">
          Наша компания предлагает покупать товар со скидкой не только в дни распродаж
          или в течение действия ограниченных предложений, но и пользоваться скидками постоянно!
        </p>
        <ProductSlider :class="b('slider')"/>
        <nuxt-link :class="b('all')" to="/">
          Смотреть все
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Product"
}
</script>

<style lang="scss" scoped>
.product {
  &__inner {
    padding: 60px 0 58px;
    @media (max-width: 576px) {
      padding: 35px 0;
    }
  }
  &__title {
    margin-left: auto;
    @media (max-width: 576px) {
      --max-width: 100%;
      text-align: center;
    }
  }
  &__text {
    max-width: 1110px;
    margin-left: auto;
    margin-bottom: 47px;
    @media (max-width: 576px) {
      text-align: center;
      font-size: 20px;
    }
    @media (max-width: 480px) {
      margin-bottom: 20px;
    }
  }
  &__slider {
    margin-bottom: 58px;
  }
  &__all {
    display: block;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    max-width: 150px;
    margin-left: auto;
    margin-right: 10%;
    text-decoration: underline;
  }
}
</style>
