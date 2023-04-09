<template>
  <section :class="b()">
    <div class="container">
      <div :class="b('inner')">
        <div :class="b('content')">
          <h1 :class="b('title')">
            {{ $t('freshlyTitle') }}
          </h1>
          <p :class="b('text')" v-html="$t('roastedText')"></p>
          <div :class="b('picture')">
            <img src="@/assets/images/intro/cup-grains.png" alt="cup-grains">
          </div>
          <nuxt-link :class="b('catalog')" to="/Coffee">
            {{ $t('catalogBtn') }}
          </nuxt-link>
        </div>
        <img :class="b('cup-grains')" src="@/assets/images/intro/cup-grains.png" alt="cup-grains">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Intro"
}
</script>

<style lang="scss" scoped>
.intro {
  position: relative;
  &__inner {
    position: relative;
    padding: 120px 0 138px;
    @media (max-width: 1024px) {
      padding: 70px 0;
    }
    @media (max-width: 864px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 50px 0;
    }
  }
  &__content {
    max-width: 57%;
    @media (max-width: 864px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 100%;
    }
  }
  &__title {
    font-size: 80px;
    font-weight: 900;
    line-height: 1.25;
    max-width: 960px;
    margin-bottom: 60px;
    @media (max-width: 1200px) {
      font-size: 40px;
    }
    @media (max-width: 864px) {
      margin-bottom: 30px;
    }
    @media (max-width: 480px) {
      font-size: 30px;
      text-align: center;
    }
  }
  ::v-deep &__text {
    font-weight: 500;
    line-height: 1.28;
    max-width: 658px;
    margin-bottom: 90px;
    span {
      font-weight: 700;
    }
    @media (max-width: 1200px) {
      max-width: 490px;
    }
    @media (max-width: 864px) {
      margin-bottom: 30px;
      text-align: center;
    }
    @media (max-width: 480px) {
      font-size: 20px;
    }
  }
  &__picture {
    display: none;
    max-width: 500px;
    width: 100%;
    @media (max-width: 864px) {
      display: block;
    }
  }
  &__catalog {
    font-size: 30px;
    font-weight: 700;
    line-height: 1.2;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F9B300;
    border-radius: 5px;
    max-width: 400px;
    width: 100%;
    height: 80px;
    padding: 20px;
    transition: 0.5s;
    @media (max-width: 480px) {
      font-size: 25px;
    }
  }
  &__cup-grains {
    position: absolute;
    top: 60px;
    right: 100px;
    width: 100%;
    height: auto;
    max-width: 53.25%;
    @media (max-width: 1440px) {
      right: 0;
    }
    @media (max-width: 1200px) {
      top: 70px;
    }
    @media (max-width: 864px) {
      display: none;
    }
  }
}
@media (hover: hover) {
  .intro {
    &__catalog {
      &:hover {
        background-color: var(--hover-color-btn);
      }
    }
  }
}
</style>
