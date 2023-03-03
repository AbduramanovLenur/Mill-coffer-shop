<template>
  <li :class="b('')">
    <nuxt-link to="Health" :class="b('link')">
      <div :class="b('picture')">
        <img :src="catalog.images" :alt="catalog.alt">
      </div>
      <div :class="b('title')">
        {{ catalog.title[$i18n.locale] }}
      </div>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  name: "VendingCatalogCart",
  props: {
    catalog: {
      type: Object,
      default: () => { }
    }
  }
}
</script>

<style lang="scss" scoped>
.vending-catalog-cart {
  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
  &__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 55px;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 30px rgba(149, 149, 149, 0.25);
    border-radius: 20px;
    max-width: 400px;
    width: 100%;
    height: 100%;
    padding: 20px 35px 40px;
    transition: 0.5s;
    @media (max-width: 1024px) {
      gap: 30px;
      padding: 20px 25px;
    }
  }
  &__picture {
    border-radius: 20px;
  }
  &__title {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
    max-width: 325px;
    @media (max-width: 1024px) {
      font-size: 21px;
    }
  }
}

@media (hover: hover) {
  .vending-catalog-cart {
    &__link {
      &:hover {
        -webkit-box-shadow: 0px 0px 50px 12px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0px 0px 50px 12px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 0px 50px 12px rgba(0, 0, 0, 0.2);
      }
    }
  }
}
</style>
