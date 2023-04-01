<template>
  <div :class="{ sidebar: b(''), isActive: isActiveClass}">
    <div :class="b('inner')">
      <SidebarMenu :class="b('menu')"/>
    </div>
  </div>
</template>

<script>
import { useActiveStore } from '@/store/ActiveStore.js';
import { mapState } from 'pinia';

export default {
  name: "Sidebar",
  computed: {
    ...mapState(useActiveStore, ['isActiveClass'])
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  left: -100%;
  top: 0;
  background-color: #fff;
  transition: 0.5s;
  height: 100vh;
  width: 100%;
  z-index: 100;
  &.isActive {
    left: 0;
  }
  &__inner {
    padding: 80px 20px;
  }
}
</style>
