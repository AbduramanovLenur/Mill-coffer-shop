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
          <nuxt-link :class="b('basket')" to="/Basket">
            <Icon name="basket" />
            <span :class="b('quantity')">
              {{ getQuantityBasket }}
            </span>
          </nuxt-link>
          <button :class="b('account')" @click="isOpenAllFiltersWith()">
            <Icon name="account" />
          </button>
        </div>
        <Burger :class="b('burger')"/>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useBasketStore } from '@/store/BasketStore.js';
import { useSearchStore } from '@/store/SearchStore.js';
import { useModalsStore } from '@/store/ModalsStore.js';

export default {
  name: "Header",
  computed: {
    ...mapState(useBasketStore, ['getQuantityBasket'])
  },
  methods: {
    ...mapActions(useSearchStore, ['addIsActiveSearch']),
    ...mapActions(useModalsStore, ['addIsOpenAuthModal', 'addIsOpenRegisterModal', 'addIsOpenForgotPasswordModal']),
    openSearchModal() {
      this.addIsActiveSearch();
      document.body.style.overflowY = "hidden";
    },
    isOpenAllFiltersWith() {
      if(document.documentElement.clientWidth >= 768) this.addIsOpenAuthModal('desktop')
      else this.addIsOpenAuthModal('mobile')
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
    position: relative;
    @media (max-width: 480px) {
      svg {
        width: 25px;
        height: 25px;
      }
    }
  }
  &__quantity {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: #e7ae12;
    color: #fff;
    width: 22px;
    height: 22px;
    border-radius: 50%;
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
