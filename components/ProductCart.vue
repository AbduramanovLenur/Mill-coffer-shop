<template>
  <div :class="b('')">
    <div :class="b('gram')">
      {{ cart.gram }} {{ $t('gramUnit') }}
    </div>
    <h3 :class="b('product-title')">
      {{ $t('discountsTitle') }}
    </h3>
    <div :class="b('box')">
      <div :class="b('picture')">
        <img :src="cart.images" :alt="cart.alt">
      </div>
      <div :class="b('info')">
        <Rating :class="b('rating')" :grade="cart.stars" :maxStars="5" />
        <div :class="b('statistics')">
          <div :class="b('statistics-number')">
            {{ cart.rating }}.0
          </div>
          <div :class="b('statistics-review')">
            ({{ cart.review }} {{ $t('reviewText') }})
          </div>
        </div>
        <Grains :class="b('grains')" :grains="cart.grains" />
        <h4 :class="b('title-static')">
          {{ $t('sourTitle') }}
        </h4>
        <Scale :class="b('sourness')" :scale="cart.sourness" :maxScale="10" />
        <h4 :class="b('title-static')">
          {{ $t('bitternessTitle') }}
        </h4>
        <Scale :class="b('bitterness')" :scale="cart.peppercorn" :maxScale="10"/>
        <h4 :class="b('title-static')">
          {{ $t('saturationTitle') }}
        </h4>
        <Scale :class="b('saturation')" :scale="cart.peppercorn" :maxScale="10"/>
      </div>
    </div>
    <h3 :class="b('title')">
      {{ cart.title[$i18n.locale] }}
    </h3>
    <div :class="b('subtitle')">
      {{ cart.subtitle[$i18n.locale] }}
    </div>
    <div :class="b('wrapper')">
      <div :class="b('prices')">
        <div :class="b('oldprice')">
          {{ cart.oldPrice }} ₽
        </div>
        <div :class="b('price')">
          {{ cart.price }} ₽
        </div>
      </div>
      <button
        :class="{'product-cart__button': b('button'), isActive: cart.isBasketActive}"
        :disabled="cart.isBasketActive"
        @click="multyFunction(cart)"
      >
        {{ $t('cartBtn') }}
      </button>
    </div>
    <img :class="b('product-images')" src="@/assets/images/product/promo-images.png" alt="images">
  </div>
</template>

<script>
// import { mapActions } from 'vuex';
import { mapActions } from 'pinia';
import { useBasketStore } from '@/store/BasketStore.js';

export default {
  name: "ProductCart",
  props: {
    cart: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    ...mapActions(useBasketStore, ['addCartToBasket']),
    // ...mapActions('product', ['addActiveClassButton']),
    multyFunction(element) {
      this.addCartToBasket(element);
      // this.addActiveClassButton({id: element.id, string: 'basket'});
    }
  }
}
</script>

<style lang="scss" scoped>
.product-cart {
  position: relative;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(146, 146, 146, 0.25);
  border-radius: 20px;
  max-width: 400px;
  padding: 20px 35px 50px;
  @media (max-width: 1200px) {
    padding: 25px;
  }
  @media (max-width: 480px) {
    padding: 15px 20px;
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
  &__product-title {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.16;
    color: #F9B300;
    margin-bottom: 20px;
  }
  &__box {
    display: flex;
    gap: 20px;
    margin-bottom: 35px;
  }
  &__picture {
    display: flex;
    align-items: center;
  }
  &__statistics {
    display: flex;
    align-items: center;
    gap: 7px;
    margin-bottom: 28px;
    &-number {
      font-size: 20px;
      font-weight: 700;
      line-height: 1.2;
    }
    &-review {
      font-size: 14px;
      font-weight: 500;
      line-height: 1.14;
      color: #5B5B5B;
    }
  }
  &__grains {
    margin-bottom: 30px;
  }
  &__title {
    &-static {
      font-size: 18px;
      font-weight: 500;
      line-height: 1.16;
      max-width: 100px;
      margin-bottom: 10px;
      color: #222222;
    }
  }
  &__sourness {
    margin-bottom: 15px;
  }
  &__bitterness {
    margin-bottom: 15px;
  }
  &__title {
    font-size: 25px;
    line-height: 1.24;
    margin-bottom: 10px;
    max-width: 230px;
    color: #222222;
  }
  &__subtitle {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.16;
    max-width: 270px;
    margin-bottom: 8px;
  }
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 20px;
    @media (max-width: 384px) {
      align-items: center;
    }
  }
  &__oldprice {
    font-size: 25px;
    font-weight: 500;
    line-height: 1.16;
    color: #C6C6C6;
    text-decoration: line-through;
    @media (max-width: 480px) {
      font-size: 20px;
    }
  }
  &__price {
    font-size: 35px;
    line-height: 1.25;
    font-weight: 900;
    color: #222222;
    @media (max-width: 480px) {
      font-size: 30px;
      white-space: nowrap;
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
  &__product-images {
    position: absolute;
    top: -40px;
    left: 10px;
  }
}

@media (hover: hover) {
  .product-cart {
    &__button {
      &:hover {
        background-color: var(--hover-color-btn);
      }
    }
  }
}
</style>
