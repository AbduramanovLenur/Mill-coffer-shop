<template>
  <div class="slider-promo">
    <div class="promo-slider">
      <div class="swiper promo-swiper" ref="swiper">
        <div class="swiper-wrapper promo-wrapper">
          <div class="swiper-slide promo-slide" v-for="cart in promo" :key="cart.id">
            <PromoCart :cart="cart" />
          </div>
        </div>
      </div>
    </div>
    <div ref="prev" class="swiper-button-next promo-button-next"></div>
    <div ref="next" class="swiper-button-prev promo-button-prev"></div>
  </div>
</template>

<script>
import { ref } from 'vue';
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
  setup() {
    const prev = ref(null);
    const next = ref(null);
    return {
      prev,
      next,
    };
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_mixins.scss";

.slider-promo {
  position: relative;
}
.promo {
  &-swiper {
    @include slider-shadow-fix(20px);
  }
  &-slider {
    --slideWidth: 400px;
    --slideGap: 20px;
    --slideAmount: 3;

    width: 100%;
    max-width: calc((var(--slideWidth) * var(--slideAmount)) + (var(--slideGap) * (var(--slideAmount) - 1)));
    overflow: hidden;
    margin: 0 auto;
  }

  &-wrapper {
    padding: 40px 0;
  }

  &-slide {
    max-width: 400px;
  }

  &-button {

    &-prev,
    &-next {
      --width: 70px;
      --heigth: 70px;

      width: var(--width);
      height: var(--heigth);

      &::after {
        display: none;
      }
    }

    &-prev {
      background-image: url("@/assets/images/product/prev.png");
    }

    &-next {
      background-image: url("@/assets/images/product/next.png");
    }
  }
}
</style>
