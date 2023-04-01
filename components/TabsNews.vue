<template>
  <ul :class="b('')">
    <TabsNewsContent v-for="item in tabNews" :news="item" :key="item.id"/>
  </ul>
</template>

<script>
import { mapState } from 'pinia';
import { useProductStore } from '@/store/ProductStore.js';

export default {
  name: "TabsNews",
  computed: {
    ...mapState(useProductStore, ['tabNews'])
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
