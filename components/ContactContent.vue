<template>
  <div :class="b('')">
    <div class="container">
      <div :class="b('inner')">
        <Breadcrumb :breadcrumbs="breadcrumb" :pxMargin="50" color="222222" />
        <Tabs :tab="tabs" :grid2="true" :pxMargin="70" :maxWidth="820" @setIsActiveTab="setIsActive"/>
        <ContactContentTab :isActiveTab="activeTab"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactContent',
  data: () => {
    return {
      breadcrumb: [
        { id: 1, text: { ru: 'Главная', en: 'Home' }, link: '/' },
        { id: 2, text: { ru: 'Контакты', en: 'Contacts' }, link: 'Contact' },
      ],
      tabs: [
        {id: 1, text: {ru: 'Контакты', en: 'Contacts'}, isActive: true, buttonName: 'first-tab'},
        {id: 2, text: {ru: 'Наши магазины', en: 'Our stores'}, isActive: false, buttonName: 'two-tab'}
      ],
      activeTab: "first-tab"
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
.contact-content {
  &__inner {
    padding: 40px 0 80px;
    @media (max-width: 480px) {
      padding: 40px 0;
    }
  }
}
</style>
