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
  name: "HealthCatalogCart",
  props: {
    catalog: {
      type: Object,
      default: () => { }
    }
  }
}
</script>

<style lang="scss" scoped>
.health-catalog-cart {
  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 30px rgba(149, 149, 149, 0.25);
    border-radius: 20px;
    padding: 20px;
    transition: 0.5s;
    max-width: 540px;
    width: 100%;
    height: 100%;
    @media (max-width: 768px) {
      padding: 15px;
    }
  }
  &__picture {
    height: 100%;
    img {
      height: 100%;
      object-fit: cover;
    }
  }
  &__title {
    font-size: 25px;
    font-weight: 700;
    line-height: 1.2;
    max-width: 240px;
    @media (max-width: 1350px) {
      font-size: 20px;
    }
    @media (max-width: 768px) {
      font-size: 17px;
    }
  }
}

@media (hover: hover) {
  .health-catalog-cart {
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
