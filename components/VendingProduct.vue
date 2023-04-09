<template>
  <section :class="b('')" class="decor--bg">
    <div class="overlay">
      <div class="container">
        <div :class="b('inner catalog-block--padding')">
          <Breadcrumb :breadcrumbs="breadcrumb" :pxMargin="90" color="fff"/>
          <TitlePages :pxMargin="120" :maxWidth="830">
            {{ $t('vendingTitle') }}
          </TitlePages>
          <ul :class="b('catalog grid-catalog grid-catalog--four')">
            <VendingCatalogCart v-for="item in vendingCatalog" :key="item.id" :catalog="item" />
          </ul>
          <Sort @sorted="sortArray" :product="vendingProduct" />
          <transition-group :class="b('list grid--four')" name="product" tag="ul">
            <Cart v-for="item in productArray" :key="item.id" :cart="item" />
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
  name: "VendingProduct",
  data: () => {
    return {
      breadcrumb: [
        { id: 1, text: {ru: 'Главная', en: 'Home'}, link: '/' },
        { id: 2, text: {ru: 'Каталог товаров', en: 'Catalog'}, link: 'Coffee' },
        { id: 3, text: {ru: 'Продукция для вендинга', en: 'Products for vending'}, link: 'Vending' }
      ],
      productArray: [],
    }
  },
  methods: {
    sortArray(array) {
      this.productArray = [...array];
    }
  },
  computed: {
    ...mapState(useProductStore, ['vendingCatalog', 'vendingProduct'])
  },
  mounted() {
    this.productArray = [...this.vendingProduct];
  }
}
</script>

<style lang="scss" scoped></style>
