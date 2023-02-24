<template>
  <div :class="{ burger: b(''), isActive: isActiveClass }" @click="activeClass">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "Burger",
  methods: {
    activeClass() {
      this.$store.dispatch('addActiveClass');
    }
  },
  computed: {
    isActiveClass() {
      return this.$store.getters["getIsActiveClass"];
    }
  }
}
</script>

<style lang="scss" scoped>
.burger {
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 30px;
  cursor: pointer;
  overflow: hidden;
  transition: 0.5s;
  z-index: 101;
  flex-shrink: 0;
  span {
    position: absolute;
    width: 35px;
    height: 5px;
    background-color: #332d27;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.5s;
    &:nth-child(1) {
      transform: translateY(-10px);
    }
    &:nth-child(2) {
      width: 25px;
      right: 0;
    }
    &:nth-child(3) {
      transform: translateY(10px);
      width: 15px;
      right: 0;
    }
  }
  &.isActive {
    span {
      &:nth-child(1) {
        transform: translateY(0) rotate(45deg);
      }
      &:nth-child(2) {
        transform: translateX(40px);
      }
      &:nth-child(3) {
        width: 35px;
        transform: translateY(0) rotate(315deg);
      }
    }
  }
  @media (max-width: 960px) {
    display: flex;
  }
}
</style>
