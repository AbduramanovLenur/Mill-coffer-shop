<template>
  <section :class="b()">
    <div class="container">
      <div :class="b('inner')">
        <div :class="b('top')">
          <Title :maxWidth="450">
            {{ $t('companyNews') }}
          </Title>
          <nuxt-link :class="b('read')" to="/Blog">
            {{ $t('readAll') }}
          </nuxt-link>
        </div>
        <div :class="b('wrapper')">
          <ArticleItemBig :articleContent="article.news1" data-aos="flip-left" data-aos-duration="1000" />
          <ArticleItemSmall :articleContent="article.news2" data-aos="flip-left" data-aos-duration="1000" />
          <ArticleItemSmall :articleContent="article.news2" data-aos="flip-left" data-aos-duration="1000" />
          <ArticleItemBig :articleContent="article.news1" data-aos="flip-left" data-aos-duration="1000" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'pinia';
import { useProductStore } from '@/store/ProductStore.js';

export default {
  name: "ArticleList",
  computed: {
    ...mapState(useProductStore, ['article'])
  }
}
</script>

<style lang="scss" scoped>
.article-list {
  background-image: url("@/assets/images/article/bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  &__inner {
    padding: 36px 0 43px;
  }
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
    gap: 50px;
    @media (max-width: 540px) {
      flex-direction: column;
      gap: 0;
    }
  }
  &__read {
    line-height: 1.28;
    text-decoration: underline;
    cursor: pointer;
  }
  &__wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>
