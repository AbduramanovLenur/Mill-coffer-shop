<template>
  <section :class="b()">
    <div class="container">
      <div :class="b('inner')">
        <Title :class="b('title')" :pxMargin="83" :maxWidth="670">
          {{ $t('catalogTitle') }}
        </Title>
        <ul :class="b('list')">
          <CatalogItem v-for="item in products" :key="item.id" :cart="item"/>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Catalog",
  data: () => {
    return {
      products: [
        {
          id: 1,
          title: {
            ru: "Свежеобжаренный кофе",
            en: "Freshly roasted coffee"
          },
          img: "catalog-1.png",
          alt: "catalog",
          link: "Coffee"
        },
        {
          id: 2,
          title: {
            ru: "Чай и кофейные напитки",
            en: "Tea and coffee drinks"
          },
          img: "catalog-2.png",
          alt: "catalog",
          link: "Tea"
        },
        {
          id: 3,
          title: {
            ru: "Продукция для вендинга",
            en: "Products for vending"
          },
          img: "catalog-3.png",
          alt: "catalog",
          link: "Vending"
        },
        {
          id: 4,
          title: {
            ru: "Здоровое питание",
            en: "Healthy food"
          },
          img: "catalog-4.png",
          alt: "catalog",
          link: "Health"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  &__inner {
    padding: 138px 0 30px;
    @media (max-width: 1024px) {
      padding: 30px 0;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
