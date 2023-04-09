<template>
  <div :class="{ 'auth-mobile': b(''), 'isActive': isOpenAuthMobileModal }">
    <div :class="b('overlay')" @click.stop>
      <div :class="b('picture')">
        <img src="@/assets/images/modals/logo-mobile.png" alt="logo">
      </div>
      <h3 :class="b('title')">
        Войти в личный кабинет
      </h3>
      <ValidationObserver ref="observer" :class="b('observer')">
        <form :class="b('form')" @submit.prevent="submitForm">
          <ValidationProvider
            name="email"
            :rules="{ required: true, min: 3, email: true }"
            v-slot="validationContext"
          >
           <input
             :class="{'auth-mobile__input': b('input'), 'isError': validationContext.errors[0]}"
             type="email"
             placeholder="Email"
             name="email"
             :state="getValidationState(validationContext)"
             v-model="form.email"
           >
           <div :class="b('error')" v-if="validationContext.errors[0]">
             {{ validationContext.errors[0] }}
           </div>
         </ValidationProvider>
         <ValidationProvider
           name="password"
           :rules="{ required: true, min: 3 }"
           v-slot="validationContext"
         >
            <input
             :class="{'auth-mobile__input': b('input'), 'isError': validationContext.errors[0]}"
             :type="isHide ? 'text' : 'password'"
             :placeholder="$t('passwordPlaceholder')"
             name="password"
             :state="getValidationState(validationContext)"
             v-model="form.password"
            >
            <div :class="b('error')" v-if="validationContext.errors[0]">
             {{ validationContext.errors[0] }}
            </div>
            <span :class="b('hide')" @click="changHidePassword()">
              <Icon name="hide"/>
            </span>
        </ValidationProvider>
        <button :class="b('sign-up')">
          Зарегистрироваться
        </button>
        </form>
      </ValidationObserver>
      <div :class="b('buttons')">
        <button :class="b('registration')">
          Регистрация
        </button>
        <button :class="b('forgot-passwor')">
          Забыли пароль?
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

export default {
  name: 'AuthMobile',
  data: () => ({
    form: {
      email: '',
      password: ''
    },
    isHide: false
  }),
  methods: {
    ...mapActions(useModalsStore, ['addIsOpenAuthModal']),
    async submitForm() {
      const isValid = await this.$refs.observer.validate();

      if (isValid) {
        console.log('Server GO')
      }
    },
    changHidePassword() {
      this.isHide ? this.isHide = false : this.isHide = true;
    },
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    }
  },
  computed: {
    ...mapState(useModalsStore, ['isOpenAuthMobileModal'])
  }
}
</script>

<style lang="scss" scoped>
.auth-mobile {
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
  &__picture {
    margin-bottom: 70px;
    @media (max-width: 480px) {
      margin-bottom: 40px;
    }
  }
  &__title {
    font-size: 35px;
    font-weight: 900;
    line-height: 1.25;
    margin-bottom: 60px;
    max-width: 410px;
    text-align: center;
    @media (max-width: 480px) {
      font-size: 28px;
      margin-bottom: 20px;
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
  &__input {
    font-size: 16px;
    line-height: 1.31;
    max-width: 700px;
    width: 100%;
    height: 70px;
    background-color: #F3F3F3;
    border-radius: 5px;
    padding: 25px 40px;
    border: none;
    @media (max-width: 960px) {
      padding: 23px 30px;
    }
    &.isError {
      border: 1px solid #ff0000;
    }
    &::placeholder {
      color: #C9C9C9;
    }
    &[name=email] {
      margin-bottom: 10px;
      &:not(.isError) {
        margin-bottom: 20px;
      }
      & + .auth-mobile__error {
      margin-bottom: 20px;
      }
    }
    &[name=password] {
      margin-bottom: 10px;
      &:not(.isError) {
        margin-bottom: 30px;
        & + .auth-mobile__hide {
          top: 30%;
          transform: translateY(-30%);
        }
      }
      & + .auth-mobile__error {
        margin-bottom: 30px;
      }
    }

    &:focus {
      outline: none;
    }
  }
  &__error {
    font-size: 16px;
    color: #ff0000;
    transition: 0.5s;
  }
  &__hide {
    width: initial !important;
    position: absolute !important;
    top: 20%;
    right: 3%;
    transform: translateY(-20%);
  }
  &__sign-up {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 700px;
    height: 70px;
    width: 100%;
    background-color: #F9B300;
    border-radius: 5px;
    padding: 20px;
    @media (max-width: 480px) {
      height: 60px;
      padding: 10px
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
}
</style>
