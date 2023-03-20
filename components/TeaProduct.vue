<template>
  <section :class="b('')" class="decor--bg">
    <div class="overlay">
      <div class="container">
        <div :class="b('inner catalog-block--padding')">
          <Breadcrumb :breadcrumbs="breadcrumb" :pxMargin="90" color="fff"/>
          <TitlePages :pxMargin="130" :maxWidth="835">
            {{ $t('teaTitle') }}
          </TitlePages>
          <ul :class="b('catalog grid-catalog grid-catalog--four')">
            <TeaCatalogCart v-for="item in catalogCart" :key="item.id" :catalog="item" />
          </ul>
          <Sort @sorted="sortArray" :product="productCart" />
          <transition-group :class="b('list grid--four')" name="product" tag="ul">
            <Cart v-for="item in productArray" :key="item.id" :cart="item" />
          </transition-group>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TeaProduct",
  data: () => {
    return {
      breadcrumb: [
        { id: 1, text: {ru: 'Главная', en: 'Home'}, link: '/' },
        { id: 2, text: {ru: 'Каталог товаров', en: 'Catalog'}, link: 'Catalog' },
        { id: 3, text: {ru: 'Чай и кофейные напитки', en: 'Tea and coffee drinks'}, link: 'Tea' }
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
    catalogCart() {
      return this.$store.getters['product/getTeaCatalog'];
    },
    productCart() {
      return this.$store.getters['product/getTeaProduct'];
    }
  },
  mounted() {
    this.productArray = [...this.productCart];
  }
}
</script>

<style lang="scss" scoped></style>
