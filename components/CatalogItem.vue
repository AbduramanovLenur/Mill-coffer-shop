<template>
  <li :class="b('')" data-aos="flip-left" data-aos-duration="1000">
    <article :class="b('card')">
      <div :class="b('wrapper')">
        <img :class="b('image')" :src="require('@/assets/images/catalog/' + cart.img)" :alt="cart.alt" height="275"
          width="255">
        <div :class="b('text')">
          {{ cart.title }}
        </div>
      </div>
      <nuxt-link :class="b('link')" :to="cart.link">
        {{ cart.button }}
      </nuxt-link>
    </article>
  </li>
</template>

<script>
export default {
  name: "CatalogItem",
  props: {
    cart: {
      type: Object,
      default: () => { }
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog-item {
  display: flex;
  justify-content: center;
  align-items: center;
  &__card {
    height: 540px;
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 30px rgba(146, 146, 146, 0.2);
    border-radius: 20px;
    padding: 65px 36px;
    cursor: pointer;
    transition: 0.5s;
    @media (max-width: 1200px) {
      height: 450px;
      padding: 45px 20px;
    }
    @media (max-width: 1024px) {
      height: 540px;
    }
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__image {
    width: 253px;
    height: 275px;
    object-fit: contain;
    margin-bottom: 30px;
  }
  &__text {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    max-width: 355px;
    text-align: center;
    cursor: pointer;
  }
  &__link {
    display: none;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    line-height: 1.2;
    background-color: var(--color-btn);
    border-radius: 5px;
    max-width: 330px;
    width: 100%;
    height: 60px;
    color: #fff;
    cursor: pointer;
    transition: 0.5s;
    @media (max-width: 1024px) {
      display: flex;
      margin-top: 50px;
    }
  }
}
@media (hover: hover) {
  .catalog-item {
    &__card {
      &:hover {
        -webkit-box-shadow: 0px 0px 50px 12px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0px 0px 50px 12px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 0px 50px 12px rgba(0, 0, 0, 0.2);
      }
      &:hover .catalog-item__link {
        display: flex;
      }
      &:hover .catalog-item__wrapper {
        margin-top: -135px;
        margin-bottom: 50px;
      }
    }
    &__link {
      &:hover {
        background-color: var(--hover-color-btn);
      }
    }
  }
}
</style>
