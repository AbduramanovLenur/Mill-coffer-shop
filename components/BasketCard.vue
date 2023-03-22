<template>
  <div :class="b('')">
    <div :class="b('top')">
      <h2 :class="b('title')">
        {{ getQuantityBasket }} {{ declinates }} {{ $t('basketText') }}
      </h2>
      <button :class="b('button')" @click="multyFunction()">
        {{ $t('deleteAllButton') }}
      </button>
    </div>
    <transition-group name="basket-transition" tag="ul" :class="b('list')">
      <BasketCardItem
        v-for="(item, index) in getBasketCart"
        :key="item.id"
        :cart="item"
        @deleteCartBasket="deleteCartFromBasket(index)"
        @decrement="decrementQuantity(index)"
        @icrement="icrementQuantity(index)"
      />
    </transition-group>
    <div :class="b('bottom')">
      <Radio @getBank="$emit('getBank', $event)"/>
      <div :class="b('total')">
        {{ $t('total') }} {{ totalCost }} ₽
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import declinate from '@/utils/declinate.js';

export default {
  name: "BasketCard",
  methods: {
    ...mapActions('basket', ['deleteCartFromBasket', 'deleteAllCart', 'icrementQuantity', 'decrementQuantity', 'addTotalPrice']),
    ...mapActions('product', ['addActiveClassButton']),
    multyFunction() {
      this.deleteAllCart();
      this.addActiveClassButton({clearAll: 'clear'});
    }
  },
  computed: {
    ...mapGetters('basket', ['getQuantityBasket', 'getBasketCart']),
    declinates() {
      return this.$i18n.locale === 'ru' ?
             declinate(2, ['товар', 'товара', 'товаров']) :
             'goods'
    },
    totalCost() {
      let result = [];

      for (let item of this.getBasketCart) {
        let value = item.price * item.quantity;

        result.push(value);
      }
      result = result.reduce((a, b) => a + b);

      this.addTotalPrice(result);
      return result;
    }
  }
}
</script>

<style lang="scss" scoped>
.basket-transition {
  &-move,
  &-leave-active {
      transition: all 0.5s ease;
  }
  &-leave-to {
      opacity: 0;
      transform: translateX(130px);
  }
}
.basket-card {
  background-color: #FFFFFF;
  padding: 80px 100px 60px;
  border: 0.708508px solid #E4E4E4;
  box-shadow: 0px 0px 35.4254px rgba(163, 163, 163, 0.25);
  border-radius: 14px;
  margin-bottom: 20px;
  @media (max-width: 1024px) {
    padding: 60px;
  }
  @media (max-width: 768px) {
    padding: 40px 30px;
  }
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    margin-bottom: 65px;
    @media (max-width: 1024px) {
      margin-bottom: 30px;
    }
    @media (max-width: 768px) {
      margin-bottom: 25px;
    }
  }
  &__title {
    font-size: 40px;
    font-weight: 900;
    line-height: 1.25;
    max-width: 400px;
    @media (max-width: 1024px) {
      font-size: 35px;
    }
    @media (max-width: 768px) {
      font-size: 25px;
    }
    @media (max-width: 480px) {
      font-size: 18px;
    }
  }
  &__button {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    color: #F9B300;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF7E1;
    border: 1px solid #F9B300;
    border-radius: 3px;
    width: 150px;
    height: 45px;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 16px;
    }
    @media (max-width: 480px) {
      font-size: 14px;
      width: 120px;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 25px;
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 25px;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: start;
      gap: 15px;
    }
    @media (max-width: 480px) {
      align-items: center;
    }
  }
  &__total {
    font-size: 18px;
  }
}
</style>
