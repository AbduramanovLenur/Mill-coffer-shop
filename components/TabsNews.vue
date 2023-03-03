<template>
  <ul :class="b('')">
    <TabsNewsContent v-for="item in tabNews" :news="item" :key="item.id"/>
  </ul>
</template>

<script>
export default {
  name: "TabsNews",
  computed: {
    tabNews() {
      return this.$store.getters['api/getTabNews'];
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs-news {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
