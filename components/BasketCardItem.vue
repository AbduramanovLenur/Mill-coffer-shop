<template>
  <li :class="b('item')">
    <article :class="b('box')">
      <div :class="b('overlay')">
        <div :class="b('delete')" @click="multyFunction(cart)">
          <Icon name="delete"></Icon>
        </div>
        <div :class="b('info')">
          <div :class="b('info-picture')">
            <img :src="cart.images" :alt="cart.alt" height="115" width="60">
          </div>
          <div :class="b('info-box')">
            <h3 :class="b('info-title')">
              {{ cart.title[$i18n.locale] }}
            </h3>
            <div :class="b('info-text')">
              {{ cart.subtitle[$i18n.locale] }}
            </div>
            <div :class="b('info-gram')">
              {{ cart.gram }} {{ unit[$i18n.locale] }}
            </div>
          </div>
        </div>
        <Counter
          :class="b('counter')"
          :quantity="cart.quantity"
          @decrement="$emit('decrement')"
          @icrement="$emit('icrement')"
        />
        <div :class="b('price')">
          {{ cart.price }} ₽
        </div>
      </div>
      <div :class="b('mobile-overlay')">
        <div :class="b('mobile-delete')" @click="multyFunction(cart)">
          <Icon name="delete"></Icon>
        </div>
        <Counter
          :class="b('mobile-counter')"
          :quantity="cart.quantity"
          @decrement="$emit('decrement')"
          @icrement="$emit('icrement')"
        />
      </div>
    </article>
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "BasketCardItem",
  props: {
    cart: {
      type: Object,
      default: () => { }
    }
  },
  data: () => ({
    unit: {
      ru: 'г.',
      en: 'g.'
    }
  }),
  methods: {
    ...mapActions('product', ['addActiveClassButton']),
    deleteCartBasket() {
      this.$emit('deleteCartBasket');
    },
    multyFunction(element) {
      this.deleteCartBasket();
      this.addActiveClassButton({ id: element.id })
    }
  }
}
</script>

<style lang="scss" scoped>
.basket-card-item {
  &__overlay {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr 1fr;
    align-items: center;
    gap: 20px;
    background-color: #FCFCFC;
    border: 1px solid #F0F0F0;
    border-radius: 14px;
    padding: 40px 55px;
    @media (max-width: 900px) {
      padding: 20px;
    }
    @media (max-width: 768px) {
      grid-template-columns: 6fr 1fr;
      margin-bottom: 20px;
    }
    @media (max-width: 480px) {
      grid-template-columns: 5fr 2fr;
      margin-bottom: 20px;
    }
  }
  &__delete {
    cursor: pointer;
    @media (max-width: 768px) {
      display: none;
    }
  }
  &__info {
    display: flex;
    align-items: center;
    gap: 25px;
    @media (max-width: 480px) {
      gap: 15px;
    }
    &-title {
      font-size: 25px;
      line-height: 1.2;
      font-weight: 700;
      margin-bottom: 10px;
      max-width: 230px;
      @media (max-width: 900px) {
        font-size: 20px;
      }
      @media (max-width: 480px) {
        font-size: 10px;
      }
    }
    &-text {
      font-size: 18px;
      line-height: 1.16;
      max-width: 235px;
      margin-bottom: 10px;
      @media (max-width: 900px) {
        font-size: 16px;
      }
      @media (max-width: 480px) {
        font-size: 10px;
      }
    }
    &-gram {
      font-size: 18px;
      line-height: 1.16;
      @media (max-width: 900px) {
        font-size: 16px;
      }
      @media (max-width: 480px) {
        font-size: 10px;
      }
    }
  }
  &__counter {
    @media (max-width: 768px) {
      display: none !important;
    }
  }
  &__price {
    display: flex;
    justify-content: flex-end;
    font-size: 25px;
    line-height: 1.16;
    flex-shrink: 0;
    white-space: nowrap;
    @media (max-width: 900px) {
      font-size: 20px;
    }
    @media (max-width: 480px) {
        font-size: 14px;
      }
  }
  &__mobile-overlay {
    display: flex;
    justify-content: space-between;
  }
  &__mobile-delete {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
  &__mobile-counter {
    display: none !important;
    @media (max-width: 768px) {
      display: flex !important;
    }
  }
}
</style>
