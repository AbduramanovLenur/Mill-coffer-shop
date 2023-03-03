<template>
  <div :class="b('')">
    <div :class="b('inner')">
      <div :class="b('wrapper')">
        <h2 :class="b('title')">
          {{ $t('tabNewsTitle') }}
        </h2>
        <Tabs :class="b('list')" :tab="tabs" :maxWidth="260" @setIsActiveTab="setIsActive" />
      </div>
      <ContentNews :isActiveTab="activeTab" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TabNews",
  data: () => {
    return {
      tabs: [
        { id: 1, text: { ru: 'Тег №1', en: 'Tag #1' }, isActive: true, buttonName: 'first-tag-tab' },
        { id: 2, text: { ru: 'Тег №2', en: 'Tag #2' }, isActive: false, buttonName: 'two-tag-tab' },
        { id: 3, text: { ru: 'Тег №3', en: 'Tag #3' }, isActive: false, buttonName: 'three-tag-tab' },
        { id: 4, text: { ru: 'Тег №4', en: 'Tag #4' }, isActive: false, buttonName: 'four-tag-tab' },
        { id: 5, text: { ru: 'Тег №5', en: 'Tag #5' }, isActive: false, buttonName: 'five-tag-tab' },
      ],
      activeTab: "first-tag-tab"
    }
  },
  methods: {
    setIsActive(tab) {
      this.activeTab = tab;
      this.tabs.forEach(item => item.buttonName === this.activeTab ? item.isActive = true : item.isActive = false);
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-news {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 111px;
    margin-bottom: 60px;
  }

  &__title {
    font-size: 40px;
    line-height: 1.2;
    font-weight: 900;
  }

  &__list {
    width: 100%;
  }
}
</style>
