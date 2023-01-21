<template>
  <div :class="{ search: b(''), isActive: isActiveSearchModal }">
    <div class="container">
      <div :class="b('inner')">
        <SearchForm />
        <div :class="b('close')" @click="closeSearchModal">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  methods: {
    closeSearchModal() {
      this.$store.dispatch('search/isActiveSearch', false);
      document.body.style.overflowY = "scroll";
    }
  },
  computed: {
    isActiveSearchModal() {
      return this.$store.getters['search/getSearch'];
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  z-index: 100;
  transition: 0.5s;
  &.isActive {
    top: 0;
  }
  &__inner {
    display: flex;
    justify-content: center;
    margin-top: 100px;
  }
  &__close {
    position: absolute;
    top: 50px;
    right: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
    @media (max-width: 1350px) {
      right: 30px;
    }
    span {
      position: absolute;
      width: 30px;
      height: 5px;
      background-color: #000;
      border-radius: 50px;
      cursor: pointer;
      &:nth-child(1) {
        transform: rotate(45deg);
      }
      &:nth-child(2) {
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
