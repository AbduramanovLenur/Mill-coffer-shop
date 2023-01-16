<template>
  <div class="swiper mySwiper" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="cart in promo" :key="cart.id">
        <PromoCart
          :images="cart.images"
          :alt="cart.alt"
          :title="cart.title"
          :subtitle="cart.subtitle"
          :oldPrice="cart.oldPrice"
          :price="cart.price"
          :sourness="cart.sourness"
          :peppercorn="cart.peppercorn"
          :saturation="cart.saturation"
          :rating="cart.rating"
          :review="cart.review"
          :stars="cart.stars"
          :gram="cart.gram"
          :grains="cart.grains"
        />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min';
import 'swiper/swiper-bundle.min.css';

export default {
  name: "ProductSlider",
  computed: {
    promo() {
      return this.$store.getters['promo-api/getPromo'];
    }
  },
  async mounted() {
    await this.$nextTick();
    new Swiper(this.$refs.swiper, {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 3,
      spaceBetween: 20,
    });
  },
}
</script>

<style lang="scss" scoped>
.swiper {
  // display: flex;
  // justify-content: center;
  &-wrapper {
    padding: 40px 0;
    max-width: 1240px;
  }
  &-slide {
    max-width: 400px;
    width: 100% !important;
  }
  &-button {
    &-prev,
    &-next {
      &::after {
        display: none;
      }
    }
    &-prev {
      background-image: url("@/assets/images/product/prev.png");
      width: 70px;
      height: 70px;
    }
    &-next {
      background-image: url("@/assets/images/product/next.png");
      width: 70px;
      height: 70px;
    }
  }
}
</style>
