<template>
  <section :class="b('')">
    <div :class="b('overlay')">
      <div class="container">
        <div :class="b('inner')">
          <Breadcrumb :breadcrumbs="breadcrumb" :pxMargin="90" />
          <TitlePages :pxMargin="80" :maxWidth="650">
            Здоровое питание
          </TitlePages>
          <ul :class="b('catalog')">
            <HealthCatalogCart v-for="item in catalogCart" :key="item.id" :catalog="item" />
          </ul>
          <Sort @sorted="sortArray" :product="productCart" />
          <transition-group :class="b('list')" name="product-health" tag="ul">
            <HealthProductCart v-for="item in productArray" :key="item.id" :cart="item" />
          </transition-group>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "HealthProduct",
  data: () => {
    return {
      breadcrumb: [
        { id: 1, text: 'Главная', link: '/' },
        { id: 2, text: 'Каталог товаров', link: 'catalog' },
        { id: 3, text: 'Здоровое питание', link: 'Health' }
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
      return this.$store.getters['api/getHealthCatalog'];
    },
    productCart() {
      return this.$store.getters['api/getHealthProduct'];
    }
  },
  mounted() {
    this.productArray = [...this.productCart];
  }
}
</script>

<style lang="scss" scoped>
.product-health {
  &-enter-active,
  &-leave-active {
    transition: all 0.5s ease;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
}

.health-product {
  background-image: url("@/assets/images/health/bg.png");
  background-position: top;
  background-repeat: no-repeat;
  &__overlay {
    background-image: url('@/assets/images/health/decor.png');
    background-position: bottom;
    background-repeat: no-repeat;
    background-clip: cover;
  }
  &__inner {
    padding: 40px 0 120px;
    @media (max-width: 480px) {
      padding: 20px 0 60px;
    }
  }
  &__catalog {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px 20px;
    margin-bottom: 70px;
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 540px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
      margin-bottom: 30px;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 70px 20px;
    @media (max-width: 1350px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 30px 20px;
    }
    @media (max-width: 864px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 576px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}</style>
