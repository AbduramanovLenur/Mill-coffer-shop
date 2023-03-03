<template>
  <div :class="b('')">
    <div class="b('info')">
      <Rating :class="b('rating')" :grade="content.rating" :maxStars="5" />
      <div :class="b('statistics')">
        <div :class="b('statistics-number')">
          {{ content.rating }}.0
        </div>
        <div :class="b('statistics-review')">
          ({{ content.review }} {{ $t('reviewText') }})
        </div>
      </div>
    </div>
    <div :class="b('gram')">
      {{ content.gram }} {{ unit[$i18n.locale] }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentCart",
  props: {
    content: {
      type: Object,
      default: () => {}
    },
    unit: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style lang="scss" scoped>
.content-cart {
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
  gap: 10px;
  @media (max-width: 640px) {
    margin-bottom: 20px;
  }
  &__rating {
    margin-bottom: 12px;
  }
  &__statistics {
    display: flex;
    align-items: center;
    gap: 7px;
    &-number {
      font-size: 20px;
      font-weight: 700;
      line-height: 1.2;
      color: #222222;
    }
    &-review {
      font-size: 14px;
      font-weight: 50;
      line-height: 1.14;
      color: #5B5B5B;
    }
  }
  &__gram {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.16;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF7E1;
    border: 1px solid #F9B300;
    border-radius: 5px;
    max-width: 132px;
    width: 100%;
    height: 33px;
    margin-left: auto;
  }
}
</style>
