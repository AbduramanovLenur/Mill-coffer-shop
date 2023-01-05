<template>
  <header :class="b()">
    <div class="container">
      <div :class="b('inner')">
        <div :class="b('logo')">
          <nuxt-link :class="b('link')" to="/">
            <img src="@/assets/images/logo.png" alt="logo">
          </nuxt-link>
        </div>
        <form :class="b('form')">
          <input :class="b('input')" type="text" placeholder="Поиск по товарам">
          <span :class="b('search')">
            <Icon name="search" />
          </span>
        </form>
        <span :class="b('search-btn')">
          <Icon name="search-btn"/>
        </span>
        <div :class="b('btns')">
          <nuxt-link :class="b('basket')" to="/basket">
            <Icon name="basket" />
          </nuxt-link>
          <nuxt-link :class="b('account')" to="/account">
            <Icon name="account" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: () => {
    return {
      isActive: false
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  box-shadow: 0px 5px 20px rgba(157, 157, 157, 0.25);
  z-index: 10;
  &__inner {
    display: flex;
    align-items: center;
    padding: 22px 0;
  }
  &__logo {
    margin-right: auto;
  }
  &__form {
    position: relative;
    max-width: 1240px;
    width: 100%;
    margin-left: 20px;
    transition: 1s;
    @media (max-width: 540px) {
      display: none;
    }
  }
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
  &__search-btn {
    display: none;
    margin-left: 35px;
    @media (max-width: 540px) {
      display: flex;
      ::v-deep .icon-search-btn svg {
        width: 25px;
        height: 25px;
      }
    }
  }
  &__btns {
    display: flex;
    gap: 53px;
    margin-left: 25px;
    @media (max-width: 640px) {
      gap: 20px;
    }
  }
}
</style>
