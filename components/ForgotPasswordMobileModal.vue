<template>
  <div :class="{ 'forgot-password-mobile-modal': b(''), 'isActive': isOpenForgotPasswordMobileModal }">
    <div :class="b('overlay')" @click.stop>
      <div :class="b('picture')">
        <img src="@/assets/images/modals/logo-mobile.png" alt="logo">
      </div>
      <TitleModal :pxMargin="40">
        {{ $t('forgotPasswordTitle') }}
      </TitleModal>
      <div :class="b('subtitle')">
        {{ $t('subtitleForgotPassword') }}
      </div>
      <ValidationObserver ref="observer" :class="b('observer')">
        <form :class="b('form')" @submit.prevent="submitForm">
          <MyInputEmail v-model="form.email"/>
          <MyButton />
        </form>
      </ValidationObserver>
      <button :class="b('back-login')" @click="multyFunction('mobile')">
        {{ $t('backLogin') }}
      </button>
      <div :class="b('close')" @click="addIsOpenForgotPasswordModal('mobile')">
          <span></span>
          <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useModalsStore } from '@/store/ModalsStore.js';

export default {
  name: "ForgotPasswordMobileModal",
  data: () => ({
    form: {
      email: ''
    }
  }),
  methods: {
    ...mapActions(useModalsStore, ['addIsOpenAuthModal', 'addIsOpenForgotPasswordModal']),
    async submitForm() {
      const isValid = await this.$refs.observer.validate();

      if (isValid) {
        console.log('Server GO')
      }
    },
    multyFunction(orientation) {
      this.addIsOpenAuthModal(orientation);
      this.addIsOpenForgotPasswordModal(orientation);
    }
  },
  computed: {
    ...mapState(useModalsStore, ['isOpenForgotPasswordMobileModal'])
  }
}
</script>

<style lang="scss" scoped>
.forgot-password-mobile-modal {
  position: fixed;
  top: -200%;
  left: 0;
  background: #fff;
  width: 100%;
  height: 100vh;
  transition: 1s;
  z-index: 101;
  padding: 10px;
  overflow: auto;
  @media (min-width: 768px) {
    top: -200% !important;
  }
  &.isActive {
    top: 0;
  }
  &__overlay {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
  }
  &__picture {
    margin-bottom: 80px;
    @media (max-width: 480px) {
      margin-bottom: 40px;
    }
  }
  &__subtitle {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
    max-width: 300px;
    text-align: center;
    margin-bottom: 50px;
  }
  &__observer {
    display: flex;
    justify-content: center;
    width: 100%;
    span {
      display: inline-block;
      position: relative;
      height: auto;
      width: 100%;
    }
  }
  &__form {
    max-width: 700px;
    width: 100%;
    margin-bottom: 40px;
    @media (max-width: 480px) {
      margin-bottom: 20px;
    }
  }
  &__back-login {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.19;
    border-bottom: 1px solid #000;
  }
  &__close {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 40px;
    right: 40px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    @media (max-width: 480px) {
      top: 20px;
      right: 20px;
    }
    span {
      position: absolute;
      width: 3px;
      height: 40px;
      background-color: #000;
      cursor: pointer;
      &:first-child {
        transform: rotate(45deg);
      }
      &:last-child {
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
