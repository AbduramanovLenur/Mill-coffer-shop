<template>
  <section :class="b('')" class="decor--bg">
    <div class="overlay">
      <div class="container">
        <div :class="b('inner catalog-block--padding')">
          <Breadcrumb :breadcrumbs="breadcrumb" :pxMargin="90" color="fff"/>
          <TitlePages :pxMargin="80" :maxWidth="650">
            {{ $t('healthTitle') }}
          </TitlePages>
          <ul :class="b('catalog grid-catalog grid-catalog--three')">
            <HealthCatalogCart v-for="item in healthCatalog" :key="item.id" :catalog="item" />
          </ul>
          <Sort @sorted="sortArray" :product="healthProduct" />
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
  name: "HealthProduct",
  data: () => {
    return {
      breadcrumb: [
        { id: 1, text: {ru: 'Главная', en: 'Home'}, link: '/' },
        { id: 2, text: {ru: 'Каталог товаров', en: 'Catalog'}, link: 'Coffee' },
        { id: 3, text: {ru: 'Здоровое питание', en: 'Healthy eating'}, link: 'Health' }
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
    ...mapState(useProductStore, ['healthCatalog', 'healthProduct']),
  },
  mounted() {
    this.productArray = [...this.healthProduct];
  }
}
</script>

<style lang="scss" scoped></style>
