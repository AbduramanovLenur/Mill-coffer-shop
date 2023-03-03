<template>
  <div :class="b()">
    <div :class="b('picture')">
      <img src="@/assets/images/article/article.jpg" alt="picture">
    </div>
    <div :class="b('content')">
      <h3 :class="b('title')">
        {{ articleContent.title[$i18n.locale] }}
      </h3>
      <p :class="b('text')">
        {{ articleContent.text[$i18n.locale] }}
      </p>
      <ArticleLinkBtn />
    </div>
  </div>
</template>

<script>

export default {
  name: "ArticleItemBig",
  props: {
    articleContent: {
      type: Object,
      default: () => { }
    }
  }
}
</script>

<style lang="scss" scoped>
.article-item-big {
  display: flex;
  // gap: 84px;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 30px rgba(146, 146, 146, 0.2);
  border-radius: 20px;
  max-width: 960px;
  cursor: pointer;
  @media (max-width: 480px) {
    width: 100%;
  }
  &__picture {
    cursor: pointer;
    img {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      cursor: pointer;
      object-fit: cover;
      height: 100%;
    }
    @media (max-width: 480px) {
      display: none;
    }
  }
  &__content {
    max-width: 460px;
    padding: 30px 84px;
    cursor: pointer;
    @media (max-width: 768px) {
      padding: 30px 50px;
    }
    @media (max-width: 480px) {
      max-width: 100%;
      padding: 30px;
    }
  }
  &__title {
    font-size: 25px;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 30px;
    cursor: pointer;
    max-width: 460px;
    @media (max-width: 960px) {
      font-size: 20px;
    }
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
  &__text {
    font-size: 20px;
    margin-bottom: 30px;
    cursor: pointer;
    max-width: 460px;
    @media (max-width: 960px) {
      font-size: 18px;
    }
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
}
@media (hover: hover) {
  .article-item-big {
    &:hover {
      -webkit-box-shadow: 0px 0px 50px 12px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 0px 0px 50px 12px rgba(0, 0, 0, 0.2);
      box-shadow: 0px 0px 50px 12px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
