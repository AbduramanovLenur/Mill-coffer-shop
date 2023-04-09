<template>
  <section :class="b('')" class="decor--bg">
    <div class="overlay">
      <div class="container">
        <div :class="b('inner catalog-block--padding')">
          <Breadcrumb :breadcrumbs="breadcrumb" :pxMargin="90" color="fff"/>
          <TitlePages :pxMargin="80" :maxWidth="830">
            {{ $t('coffeeTitle') }}
          </TitlePages>
          <Sort @sorted="sortArray" :product="coffeeProduct" :isWhite="true"/>
          <transition-group :class="b('list grid--four')" name="product" tag="ul">
            <CoffeeCart v-for="item in productArray" :key="item.id" :cart="item" />
          </transition-group>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'pinia';
import { useProductStore } from '@/store/ProductStore.js';

export default {
  name: "CoffeeProduct",
  data: () => ({
    breadcrumb: [
        { id: 1, text: {ru: 'Главная', en: 'Home'}, link: '/' },
        { id: 2, text: {ru: 'Каталог товаров', en: 'Catalog'}, link: 'Coffee' },
        { id: 2, text: {ru: 'Свежеобжаренный кофе', en: 'Freshly roasted coffee'}, link: 'Coffee' }
      ],
      productArray: [],
  }),
  methods: {
    sortArray(array) {
      this.productArray = [...array];
    }
  },
  computed: {
    ...mapState(useProductStore, ['coffeeProduct'])
  },
  mounted() {
    this.productArray = [...this.coffeeProduct];
  }
}
</script>

<style lang="scss" scoped></style>
