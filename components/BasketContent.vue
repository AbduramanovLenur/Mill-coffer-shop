<template>
  <div :class="b('')">
    <div class="container">
      <div :class="b('inner')">
        <Breadcrumb :breadcrumbs="breadcrumb" :pxMargin="50" color="222222" />
        <div :class="b('overlay')" v-if="getQuantityBasket">
          <BasketCard @getBank="getBank"/>
          <BasketForm :bank="bank"/>
        </div>
        <div :class="b('empty')" v-else>
          <div :class="b('empty-ico')">
            <Icon name="empty" />
          </div>
          <h3 :class="b('empty-title')">
            {{ $t('emptyBasket') }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "BasketContent",
  data: () => ({
    breadcrumb: [
      { id: 1, text: { ru: 'Главная', en: 'Home' }, link: '/' },
      { id: 2, text: { ru: 'Корзина', en: 'Basket' }, link: 'Basket' },
    ],
    bank: 'visa'
  }),
  methods: {
    getBank(value) {
      this.bank = value;
    }
  },
  computed: {
    ...mapGetters('basket', ['getQuantityBasket'])
  }
}
</script>

<style lang="scss" scoped>
.basket-content {
  background-image: url('@/assets/images/basket/basket-decor.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  &__inner {
    padding: 40px 0 60px;
  }
  ::v-deep &__empty {
    &-ico {
      margin: 0 auto;
      margin-bottom: 30px;
      max-width: 350px;
      span {
        width: 100%;
        svg {
          width: 100%;
        }
      }
    }
    &-title {
      font-size: 55px;
      max-width: 500px;
      margin: 0 auto;
      text-align: center;
      @media (max-width: 768px) {
        font-size: 40px;
      }
    }
  }
}
</style>
