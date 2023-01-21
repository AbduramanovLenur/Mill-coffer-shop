<template>
  <form :class="b('')">
    <input :class="b('input')" type="text" placeholder="Поиск по товарам">
    <span :class="b('search')">
      <Icon name="search" />
    </span>
  </form>
</template>

<script>
export default {
  name: "SearchForm"
}
</script>

<style lang="scss" scoped>
.search-form {
  position: relative;
  max-width: 1240px;
  width: 100%;
  transition: 1s;
  &__input {
    font-size: 20px;
    line-height: 1.3;
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 30px;
    box-shadow: 0px 0px 20px rgba(157, 157, 157, 0.25);
    border: none;
    height: 60px;
    padding: 17px 82px;
    @media (max-width: 640px) {
      font-size: 14px;
      padding: 17px 50px;
    }
    &::placeholder {
      color: #C4C4C4;
    }
    &:focus {
      outline: none;
    }
  }
  &__search {
    display: flex;
    position: absolute;
    top: 14px;
    left: 30px;
    @media (max-width: 640px) {
      top: 17px;
      left: 15px;
      ::v-deep .icon-search svg {
        width: 25px;
        height: 25px;
      }
    }
  }
}
</style>








