<template>
  <header :class="b()">
    <div class="container">
      <div :class="b('inner')">
        <div :class="b('logo')">
          <nuxt-link :class="b('link')" to="/">
            <img src="@/assets/images/logo.png" alt="logo">
          </nuxt-link>
        </div>
        <Menu :class="b('menu')"/>
        <div :class="b('btns')">
          <span :class="b('search-btn')" @click="openSearchModal">
            <Icon name="search-btn"/>
          </span>
          <nuxt-link :class="b('basket')" to="/basket">
            <Icon name="basket" />
          </nuxt-link>
          <nuxt-link :class="b('account')" to="/account">
            <Icon name="account" />
          </nuxt-link>
        </div>
        <Burger :class="b('burger')"/>
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
  },
  methods: {
    openSearchModal() {
      this.$store.dispatch('search/isActiveSearch');
      document.body.style.overflowY = "hidden";
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  box-shadow: 0px 5px 20px rgba(157, 157, 157, 0.25);
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 22px 0;
    @media (max-width: 960px) {
      gap: 20px;
    }
    @media (max-width: 480px) {
      gap: 5px;
    }
  }
  &__logo {
    @media (max-width: 960px) {
      margin-right: auto;
    }
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
  &__menu {
    @media (max-width: 960px) {
      display: none !important;
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
  ::v-deep &__search-btn {
    @media (max-width: 480px) {
      svg {
        width: 25px;
        height: 25px;
      }
    }
  }
  ::v-deep &__basket {
    @media (max-width: 480px) {
      svg {
        width: 25px;
        height: 25px;
      }
    }
  }
  ::v-deep &__account {
    @media (max-width: 480px) {
      svg {
        width: 25px;
        height: 25px;
      }
    }
  }
}
</style>
