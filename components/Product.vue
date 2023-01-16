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
        <ProductSlider />
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
  &__title {
    margin-left: auto;
  }
  &__text {
    max-width: 1110px;
    margin-left: auto;
    margin-bottom: 47px;
  }
}
</style>
