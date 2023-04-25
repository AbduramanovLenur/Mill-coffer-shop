<template>
  <div :class="{ 'sign-up-mobile-modal': b(''), 'isActive': isOpenRegisterMobileModal }">
    <div :class="b('overlay')" @click.stop>
      <div :class="b('picture')">
        <img src="@/assets/images/modals/logo-mobile.png" alt="logo">
      </div>
      <TitleModal :pxMargin="40">
        {{ $t('registrationTitle') }}
      </TitleModal>
      <div :class="b('subtitle')">
        {{ $t('subtitleSignUp') }}
      </div>
      <ValidationObserver ref="observer" :class="b('observer')">
        <form :class="b('form')" @submit.prevent="submitForm">
          <ValidationProvider
            name="name"
            :rules="{ required: true, min: 3 }"
            v-slot="validationContext"
          >
            <input
              :class="{'sign-up-mobile-modal__input': b('input'), 'isError': validationContext.errors[0]}"
              type="text"
              :placeholder="$t('namePlaceholder')"
              name="name"
              :state="getValidationState(validationContext)"
              v-model="form.name"
            >
            <div :class="b('error')" v-if="validationContext.errors[0]">
              {{ validationContext.errors[0] }}
            </div>
          </ValidationProvider>
          <ValidationProvider
            name="email"
            :rules="{ required: true, min: 3, email: true }"
            v-slot="validationContext"
          >
            <input
              :class="{'sign-up-mobile-modal__input': b('input'), 'isError': validationContext.errors[0]}"
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
            name="phone"
            :rules="{ required: true, min: 3 }"
            v-slot="validationContext"
          >
            <input
              :class="{'sign-up-mobile-modal__input': b('input'), 'isError': validationContext.errors[0]}"
              type="text"
              :placeholder="$t('phonePlaceholder')"
              name="phone"
              :state="getValidationState(validationContext)"
              v-model="form.phone"
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
              :class="{'sign-up-mobile-modal__input': b('input'), 'isError': validationContext.errors[0]}"
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
          <MyButton />
        </form>
      </ValidationObserver>
      <button :class="b('back-login')" @click="multyFunction('mobile')" v-html="$t('alreadyAccount')"></button>
      <div :class="b('close')" @click="addIsOpenRegisterModal('mobile')">
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
  name: "SignUpMobileModal",
  data: () => ({
    form: {
      email: '',
      password: '',
      name: '',
      phone: ''
    },
    isHide: false
  }),
  methods: {
    ...mapActions(useModalsStore, ['addIsOpenAuthModal', 'addIsOpenRegisterModal']),
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
    },
    multyFunction(orientation) {
      this.addIsOpenAuthModal(orientation);
      this.addIsOpenRegisterModal(orientation);
    }
  },
  computed: {
    ...mapState(useModalsStore, ['isOpenRegisterMobileModal'])
  }
}
</script>

<style lang="scss" scoped>
.sign-up-mobile-modal {
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
    max-width: 415px;
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
    &[name=name] {
      margin-bottom: 10px;
      &:not(.isError) {
        margin-bottom: 20px;
      }
      & + .sign-up-mobile-modal__error {
      margin-bottom: 20px;
      }
    }
    &[name=email] {
      margin-bottom: 10px;
      &:not(.isError) {
        margin-bottom: 20px;
      }
      & + .sign-up-mobile-modal__error {
      margin-bottom: 20px;
      }
    }
    &[name=phone] {
      margin-bottom: 10px;
      &:not(.isError) {
        margin-bottom: 20px;
      }
      & + .sign-up-mobile-modal__error {
      margin-bottom: 20px;
      }
    }
    &[name=password] {
      margin-bottom: 10px;
      &:not(.isError) {
        margin-bottom: 30px;
        & + .sign-up-mobile-modal__hide {
          top: 30%;
          transform: translateY(-30%);
        }
      }
      & + .sign-up-mobile-modal__error {
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
  &__back-login {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.19;
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
