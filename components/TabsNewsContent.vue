<template>
  <li :class="b('')" data-aos="fade-left" data-aos-duration="1000">
    <div :class="b('box')">
      <div :class="b('picture')">
        <img :src="news.images" :alt="news.alt">
      </div>
      <div :class="b('wrapper')">
        <h2 :class="b('title')">
          {{ news.title[$i18n.locale] }}
        </h2>
        <p :class="b('text text--mb-40')">
          {{ news.text1[$i18n.locale] }}
        </p>
        <p :class="b('text text--mb-85')">
          {{ news.text2[$i18n.locale] }}
        </p>
        <div :class="b('inner')">
          <div :class="b('author')">
            {{ $t('author') }} {{ news.author[$i18n.locale] }}
          </div>
          <nuxt-link :class="b('button')" to="/">
            <div :class="b('more')">
              {{ $t('moreText') }}
            </div>
            <Icon name="arrow-gold" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "TabsNewsContent",
  props: {
    news: {
      type: Object,
      default: () => { }
    }
  }
}
</script>

<style lang="scss" scoped>
.text--mb-40 {
  margin-bottom: 40px;
}

.text--mb-85 {
  margin-bottom: 85px;
}

.tabs-news-content {
  &__box {
    display: flex;
    box-shadow: 0px 0px 30px rgba(146, 146, 146, 0.2);
    border-radius: 20px;
  }
  &__picture {
    img {
      border-radius: 20px 0px 0px 20px;
      height: 100%;
      object-fit: cover;
    }
  }
  &__wrapper {
    padding: 40px 140px 50px 70px;
    width: 100%;
  }
  &__title {
    font-size: 25px;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 60px;
    max-width: 800px;
  }
  &__text {
    font-size: 20px;
    line-height: 1.3;
    max-width: 830px;
  }
  &__inner {
    display: flex;
    justify-content: space-between;
  }
  &__author {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;
  }
  &__button {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0%;
      height: 2px;
      background: var(--hover-color-btn);
      transition: 0.4s ease-out;
    }
  }
  &__more {
    font-size: 20px;
    color: #F9B300;
  }
}
@media (hover: hover) {
  .tabs-news-content {
    &__button {
      &:hover::after {
          left: 0;
          width: 100%;
      }
    }
  }
}
</style>
