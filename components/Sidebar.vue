<template>
  <div :class="{ sidebar: b(''), isActive: isActive}">
    <div :class="b('inner')">
      <SidebarMenu :class="b('menu')"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  computed: {
    isActive() {
      return this.$store.getters["getIsActiveClass"];
    }
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
  z-index: 50;
  &.isActive {
    left: 0;
  }
  &__inner {
    padding: 80px 20px;
  }
}
</style>
