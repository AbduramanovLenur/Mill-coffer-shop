<template>
  <ul :class="b('')">
    <li :class="b('item')" v-show="getIsActive('first-tag-tab')">
      <TabsNews />
    </li>
    <li :class="b('item')" v-show="getIsActive('two-tag-tab')">
      <div :class="b('box')">
        <div :class="b('picture')">
          <img src="@/assets/images/empty.png" alt="picture">
        </div>
        <div :class="b('text')">
          {{ $t('emptyNews') }}
        </div>
      </div>
    </li>
    <li :class="b('item')" v-show="getIsActive('three-tag-tab')">
      <TabsNews />
    </li>
    <li :class="b('item')" v-show="getIsActive('four-tag-tab')">
      <div :class="b('box')">
        <div :class="b('picture')">
          <img src="@/assets/images/empty.png" alt="picture">
        </div>
        <div :class="b('text')">
          {{ $t('emptyNews') }}
        </div>
      </div>
    </li>
    <li :class="b('item')" v-show="getIsActive('five-tag-tab')">
      <TabsNews />
    </li>
  </ul>
</template>

<script>
export default {
  name: "ContentNews",
  props: {
    isActiveTab: {
      type: String,
      default: () => ''
    }
  },
  methods: {
    getIsActive(tab) {
      return this.isActiveTab === tab;
    }
  }
}
</script>

<style lang="scss" scoped>
.content-news {
  &__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
  }
  &__picture {
    max-width: 500px;
    width: 100%;
    margin-bottom: 70px;
    img {
      width: 100%;
    }
  }
  &__text {
    font-size: 45px;
  }
}
</style>
