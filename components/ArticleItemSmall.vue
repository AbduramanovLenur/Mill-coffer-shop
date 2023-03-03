<template>
  <div :class="b()">
    <h3 :class="b('title')">
      {{ articleContent.title[$i18n.locale] }}
    </h3>
    <p :class="b('text')">
      {{ articleContent.text[$i18n.locale] }}
    </p>
    <ArticleLinkBtn />
  </div>
</template>

<script>
export default {
  name: "ArticleItemSmall",
  props: {
    articleContent: {
      type: Object,
      default: () => ''
    }
  }
}
</script>

<style lang="scss" scoped>
.article-item-small {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 30px rgba(146, 146, 146, 0.2);
  border-radius: 20px;
  max-width: 680px;
  width: 100%;
  padding: 60px 120px;
  cursor: pointer;
  @media (max-width: 1024px) {
    padding: 50px 70px;
  }
  @media (max-width: 480px) {
    padding: 35px;
  }
  &__title {
    font-size: 25px;
    line-height: 1.3;
    margin-bottom: 40px;
    max-width: 430px;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
  &__text {
    font-size: 20px;
    line-height: 1.3;
    max-width: 430px;
    margin-bottom: 50px;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
}
@media (hover: hover) {
  .article-item-small {
    &:hover {
      -webkit-box-shadow: 0px 0px 50px 12px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 0px 0px 50px 12px rgba(0, 0, 0, 0.2);
      box-shadow: 0px 0px 50px 12px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
