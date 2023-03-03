<template>
  <section :class="b('')" class="overlay">
    <div class="container">
      <div :class="b('inner')">
        <Breadcrumb :breadcrumbs="breadcrumb" :pxMargin="50" color="222222"/>
        <Tabs :tab="tabs" :pxMargin="70" :maxWidth="540" @setIsActiveTab="setIsActive"/>
        <TabsContent :isActiveTab="activeTab"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogContent",
  data: () => {
    return {
      breadcrumb: [
        { id: 1, text: {ru: 'Главная', en: 'Home'}, link: '/' },
        { id: 2, text: {ru: 'Блог', en: 'Blog'}, link: 'Blog' },
      ],
      tabs: [
        {id: 1, text: {ru: 'Обучение', en: 'Learning'}, isActive: false, buttonName: 'first-tab'},
        {id: 2, text: {ru: 'Новости', en: 'News'}, isActive: false, buttonName: 'two-tab'},
        {id: 3, text: {ru: 'Частые вопросы', en: 'FAQ'}, isActive: true, buttonName: 'three-tab'}
      ],
      activeTab: "three-tab"
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
.blog-content {
  &__inner {
    padding: 40px 0 100px;
  }
}
</style>
