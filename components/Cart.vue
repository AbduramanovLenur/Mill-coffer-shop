<template>
  <li :class="b('')" data-aos="flip-left" data-aos-duration="1000">
    <article :class="b('box')">
      <div :class="b('content')">
        <div class="b('info')">
          <Rating :class="b('rating')" :grade="cart.rating" :maxStars="5" />
          <div :class="b('statistics')">
            <div :class="b('statistics-number')">
              {{ cart.rating }}.0
            </div>
            <div :class="b('statistics-review')">
              ({{ cart.review }} {{ $t('reviewText') }})
            </div>
          </div>
        </div>
        <div :class="b('gram')">
          {{ cart.gram }} {{ unit[$i18n.locale] }}
        </div>
      </div>
      <div :class="b('pictures')">
        <img :src="cart.images" :alt="cart.alt">
      </div>
      <h3 :class="b('title')">
        {{ cart.title[$i18n.locale] }}
      </h3>
      <div :class="b('subtitle')">
        {{ cart.subtitle[$i18n.locale] }}
      </div>
      <div :class="b('wrapper')">
        <div :class="b('price')">
          {{ cart.price }} ₽
        </div>
        <button
          :class="{'cart__button': b('button'), 'cart-button': 'cart-button', isActive: cart.isBasketActive}"
          :disabled="cart.isBasketActive"
          @click="multyFunction(cart)"
        >
          {{ $t('toBasket') }}
        </button>
      </div>
    </article>
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "Cart",
  props: {
    cart: {
      type: Object,
      default: () => { }
    }
  },
  data: () => {
    return {
      unit: {
        ru: 'г.',
        en: 'g.'
      }
    }
  },
  methods: {
    ...mapActions('basket', ['addCartToBasket']),
    ...mapActions('product', ['addActiveClassButton']),
    multyFunction(element) {
      this.addCartToBasket(element);
      this.addActiveClassButton({id: element.id, string: 'basket'});
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
  }
  &__box {
    border: 1px solid #E4E4E4;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 30px rgba(149, 149, 149, 0.25);
    border-radius: 20px;
    transition: 0.5s;
    max-width: 400px;
    width: 100%;
    padding: 30px 40px 50px;
    @media (max-width: 1536px) {
      padding: 30px 15px 50px;
    }
  }
  &__content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
    gap: 10px;
    @media (max-width: 640px) {
      margin-bottom: 20px;
    }
  }
  &__rating {
    margin-bottom: 12px;
  }
  &__statistics {
    display: flex;
    align-items: center;
    gap: 7px;
    &-number {
      font-size: 20px;
      font-weight: 700;
      line-height: 1.2;
      color: #222222;
    }
    &-review {
      font-size: 14px;
      font-weight: 50;
      line-height: 1.14;
      color: #5B5B5B;
    }
  }
  &__gram {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.16;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF7E1;
    border: 1px solid #F9B300;
    border-radius: 5px;
    max-width: 132px;
    width: 100%;
    height: 33px;
    margin-left: auto;
  }
  &__pictures {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 35px;
    @media (max-width: 640px) {
      margin-bottom: 20px;
    }
  }
  &__title {
    font-size: 25px;
    font-weight: 900;
    line-height: 1.24;
    max-width: 270px;
    margin-bottom: 30px;
    @media (max-width: 1024px) {
      margin-bottom: 15px;
    }
    @media (max-width: 960px) {
      text-align: center;
      margin: 0 auto 15px;
    }
    @media (max-width: 640px) {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }
  &__subtitle {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.16;
    max-width: 210px;
    margin-bottom: 30px;
    @media (max-width: 1024px) {
      margin-bottom: 20px;
    }
    @media (max-width: 960px) {
      margin: 0 auto 20px;
      text-align: center;
    }
  }
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    @media (max-width: 960px) {
      flex-direction: column;
    }
  }
  &__price {
    font-size: 35px;
    font-weight: 900;
    line-height: 1.25;
    color: #222222;
    @media (max-width: 1024px) {
      font-size: 30px;
    }
  }
  &__button {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.2;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-btn);
    border-radius: 5px;
    max-width: 178px;
    width: 100%;
    height: 48px;
    padding: 13px;
    color: #FFFFFF;
    transition: 0.5s;
    &.isActive {
      opacity: 0.5;
    }
  }
}

@media (hover: hover) {
  .cart {
    &__box {
      &:hover {
        -webkit-box-shadow: 0px 0px 50px 12px rgba(0, 0, 0, 0.2) !important;
        -moz-box-shadow: 0px 0px 50px 12px rgba(0, 0, 0, 0.2) !important;
        box-shadow: 0px 0px 50px 12px rgba(0, 0, 0, 0.2) !important;
      }
    }
    &__button {
      &:hover {
        background-color: var(--hover-color-btn) !important;
      }
    }
  }
}
</style>
