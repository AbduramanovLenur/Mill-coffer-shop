<template>
  <div class="slider-product">
    <div class="product-slider">
      <div class="swiper product-swiper" ref="swiper">
        <div class="swiper-wrapper product-wrapper">
          <div class="swiper-slide product-slide" v-for="cart in promo" :key="cart.id">
            <ProductCart :cart="cart" />
          </div>
        </div>
      </div>
      <div class="swiper-pagination product-pagination"></div>
    </div>
    <div ref="prev" class="swiper-button-next product-button-next"></div>
    <div ref="next" class="swiper-button-prev product-button-prev"></div>
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
      return this.$store.getters['product/getPromo'];
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
      spaceBetween: 25,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        1152: {
          slidesPerView: 3
        },
        864: {
          slidesPerView: 2
        },
        320: {
          slidesPerView: 1
        }
      }
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

.slider-product {
  position: relative;
}

.product {
  &-swiper {
    @include slider-shadow-fix(10px);
  }
  &-slider {
    --slideWidth: 400px;
    --slideGap: 25px;
    --slideAmount: 3;

    width: 100%;
    max-width: calc((var(--slideWidth) * var(--slideAmount)) + (var(--slideGap) * (var(--slideAmount) - 1)));
    margin: 0 auto;
    @media (max-width: 1152px) {
      --slideAmount: 2;
    }
    @media (max-width: 864px) {
      --slideAmount: 1;
    }
  }
  &-wrapper {
    padding: 40px 0;
    max-width: 1240px;
  }
  &-slide {
    max-width: 400px;
  }
  &-pagination {
    display: none;
    bottom: -10px;
    @media (max-width: 1440px) {
      display: block;
    }
  }
  &-button {
    &-prev,
    &-next {
      --width: 70px;
      --heigth: 70px;

      width: var(--width);
      height: var(--heigth);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      &::after {
        display: none;
      }

      @media (max-width: 1536px) {
        --width: 50px;
        --heigth: 50px;
      }
      @media (max-width: 1440px) {
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
::v-deep .swiper-pagination-bullet {
  width: 15px;
  height: 15px;
  background-color: #00ffff;
}
::v-deep .swiper-pagination-bullet-active {
  background: #f00;
  width: 15px;
  height: 15px;
}
</style>
