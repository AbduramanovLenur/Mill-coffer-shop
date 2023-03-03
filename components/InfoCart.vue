<template>
  <div :class="b('')">
    <div :class="b('pictures')">
        <img :src="info.images" :alt="info.alt">
    </div>
    <h3 :class="b('title')">
      {{ info.title[$i18n.locale] }}
    </h3>
    <div :class="b('subtitle')">
      {{ info.subtitle[$i18n.locale] }}
    </div>
    <div :class="b('wrapper')">
      <div :class="b('price')">
        {{ info.price }} ₽
      </div>
      <button :class="b('button cart-button')">
        {{ $t('toBasket') }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoCart",
  props: {
    info: {
      type: Object,
      default: () => { }
    }
  }
}
</script>

<style lang="scss" scoped>
.info-cart {
  &__pictures {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 35px;
    @media (max-width: 640px) {
      margin-bottom: 20px;
    }
  }
  &__title {
    font-size: 25px;
    font-weight: 900;
    line-height: 1.24;
    max-width: 270px;
    margin-bottom: 30px;

    @media (max-width: 1024px) {
      margin-bottom: 15px;
    }

    @media (max-width: 960px) {
      text-align: center;
      margin: 0 auto 15px;
    }

    @media (max-width: 640px) {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }

  &__subtitle {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.16;
    max-width: 210px;
    margin-bottom: 30px;

    @media (max-width: 1024px) {
      margin-bottom: 20px;
    }

    @media (max-width: 960px) {
      margin: 0 auto 20px;
      text-align: center;
    }
  }

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    @media (max-width: 960px) {
      flex-direction: column;
    }
  }

  &__price {
    font-size: 35px;
    font-weight: 900;
    line-height: 1.25;
    color: #222222;

    @media (max-width: 1024px) {
      font-size: 30px;
    }
  }

  &__button {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.2;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-btn);
    border-radius: 5px;
    max-width: 178px;
    width: 100%;
    height: 48px;
    padding: 13px;
    color: #FFFFFF;
    transition: 0.5s;
  }
}</style>
