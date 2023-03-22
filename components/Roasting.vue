<template>
  <section :class="b()">
    <div class="container">
      <div :class="b('inner')">
        <Title :class="b('title')" :pxMargin="100" :maxWidth="740" fzColor="fff">
          {{ $t('roastingTitle') }}
        </Title>
        <p :class="b('text')" v-html="$t('roastingText')"></p>
        <nuxt-link :class="b('link')" to="/Blog">
          {{ $t('goCatalogBtn') }}
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Roasting"
}
</script>

<style lang="scss" scoped>
.roasting {
  @media (max-width: 1152px) {
    background-image: url("@/assets/images/roasting/roasting-bg.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  &__inner {
    padding: 143px 0 153px;
    @media (max-width: 864px) {
      padding: 70px 0;
    }
  }
  &__text {
    color: #fff;
    max-width: 1246px;
    margin-bottom: 100px;
    @media (max-width: 768px) {
      font-size: 20px;
      margin-bottom: 50px;
    }
  }
  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: #fff;
    background-color: var(--color-btn);
    max-width: 400px;
    width: 100%;
    height: 80px;
    padding: 22px;
    transition: 0.5s;
  }
}

@media (hover: hover) {
  .roasting {
    &__link {
      &:hover {
        background-color: var(--hover-color-btn);
      }
    }
  }
}
</style>
