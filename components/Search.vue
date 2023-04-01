<template>
  <div :class="{ search: b(''), isActive: isActiveSearch }">
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
import { mapState, mapActions } from 'pinia';
import { useSearchStore } from '@/store/SearchStore.js';

export default {
  name: "Search",
  methods: {
    ...mapActions(useSearchStore, ['addIsActiveSearch']),
    closeSearchModal() {
      this.addIsActiveSearch();
      document.body.style.overflowY = "scroll";
    }
  },
  computed: {
    ...mapState(useSearchStore, ['isActiveSearch'])
  }
}
</script>

<style lang="scss" scoped>
.search {
  position: fixed;
  top: -130%;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  z-index: 102;
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
