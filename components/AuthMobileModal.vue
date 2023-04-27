<template>
  <div :class="{ 'auth-mobile-modal': b(''), 'isActive': isOpenAuthMobileModal }">
    <div :class="b('overlay')" @click.stop>
      <div :class="b('picture')">
        <img src="@/assets/images/modals/logo-mobile.png" alt="logo">
      </div>
      <TitleModal :pxMargin="60">
        {{ $t('loginPersonalAccount') }}
      </TitleModal>
      <ValidationObserver ref="observer" :class="b('observer')">
        <form :class="b('form')" @submit.prevent="submitForm">
          <MyInputEmail v-model="form.email" />
          <MyInputPassword v-model="form.password" />
          <MyButton>
            {{ $t('signInBtn') }}
          </MyButton>
        </form>
      </ValidationObserver>
      <div :class="b('buttons')">
        <button :class="b('registration')" @click="multyFunctionSignUpModal('mobile')">
          {{ $t('registrationBtn') }}
        </button>
        <button :class="b('forgot-passwor')">
          {{ $t('forgotPassword') }}
        </button>
      </div>
      <div :class="b('close')" @click="addIsOpenAuthModal('mobile')">
          <span></span>
          <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useModalsStore } from '@/store/ModalsStore.js';
import { useAuthStore } from '@/store/AuthStore.js';

export default {
  name: 'AuthMobileModal',
  data: () => ({
    form: {
      email: '',
      password: ''
    }
  }),
  methods: {
    ...mapActions(useModalsStore, ['addIsOpenAuthModal', 'addIsOpenRegisterModal']),
    ...mapActions(useAuthStore, ['login']),
    async submitForm() {
      const isValid = await this.$refs.observer.validate();

      if (isValid) {
        this.login(this.form);
        this.addIsOpenAuthModal('mobile');
        if (this.errorAuth) {
          this.$toast.error('Ошибка');
        } else {
          this.$toast.success('Вы вошли в аккаунт!');
        }

        this.form = {
          email: '',
          password: ''
        }
      }
    },
    multyFunctionSignUpModal(orientation) {
      this.addIsOpenAuthModal(orientation);
      this.addIsOpenRegisterModal(orientation);
    }
  },
  computed: {
    ...mapState(useModalsStore, ['isOpenAuthMobileModal']),
    ...mapState(useAuthStore, ['errorAuth']),
  }
}
</script>

<style lang="scss" scoped>
.auth-mobile-modal {
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
    margin-bottom: 70px;
    @media (max-width: 480px) {
      margin-bottom: 40px;
    }
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
  &__buttons {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
  }
  &__registration,
  &__forgot-passwor {
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
