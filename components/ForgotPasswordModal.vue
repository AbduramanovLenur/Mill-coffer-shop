<template>
  <div :class="{ 'forgot-password-modal': b(''), 'isActive': isOpenForgotPasswordModal }" @click="addIsOpenForgotPasswordModal('desktop')">
    <div :class="b('overlay')" @click.stop>
      <FormBoxModal />
      <div :class="b('forms')">
        <div :class="b('wrapper')">
          <div :class="b('logo')">
            <img src="@/assets/images/modals/logo.png" alt="logo">
          </div>
          <h3 :class="b('title-forgot-password')">
            {{ $t('forgotPasswordTitle') }}
          </h3>
          <div :class="b('subtitle-forgot-password')">
            {{ $t('forgotPasswordSubtitle') }}
          </div>
          <ValidationObserver ref="observer" :class="b('observer')">
            <form :class="b('form')" @submit.prevent="submitForm">
              <ValidationProvider
                name="email"
                :rules="{ required: true, min: 3, email: true }"
                v-slot="validationContext"
              >
                <input
                  :class="{'forgot-password-modal__input': b('input'), 'isError': validationContext.errors[0]}"
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
              <ButtonModal>
                {{ $t('getPhoneCodeBtn') }}
              </ButtonModal>
            </form>
          </ValidationObserver>
          <button :class="b('back-signin')" @click="multyFunction('desktop')">
            {{ $t('backSignInBtn') }}
          </button>
        </div>
        <div :class="b('close')" @click="addIsOpenForgotPasswordModal('desktop')">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useModalsStore } from '@/store/ModalsStore.js';

export default {
  name: "ForgotPasswordModal",
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
        console.log('Server GO');
      }
    },
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    },
    multyFunction(orientation) {
      this.addIsOpenAuthModal(orientation);
      this.addIsOpenForgotPasswordModal(orientation);
    }
  },
  computed: {
    ...mapState(useModalsStore, ['isOpenForgotPasswordModal'])
  }
}
</script>

<style lang="scss" scoped>
.forgot-password-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: -200%;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
  transition: 1s;
  z-index: 101;
  padding: 10px;
  @media (max-width: 768px) {
    top: -200% !important;
  }
  &.isActive {
    top: 0;
  }
  &__overlay {
    display: flex;
    background-color: #FFFFFF;
    border-radius: 30px;
    width: 100%;
    max-width: 1380px;
  }
  &__forms {
    position: relative;
    border-radius: 0px 30px 30px 0px;
    padding: 60px 11.7%;
    width: 100%;
    @media (max-width: 1024px) {
      padding: 30px 7.7%;
    }
  }
  &__logo {
    margin: 0 auto 50px;
    max-width: 155px;
    @media (max-width: 1200px) {
      margin-bottom: 20px;
    }
  }
  &__title {
    &-forgot-password {
      font-size: 40px;
      font-weight: 900;
      line-height: 1.25;
      margin: 0 auto 40px;
      max-width: 460px;
      text-align: center;
      @media (max-width: 1200px) {
        font-size: 30px;
        margin: 0 auto 20px;
      }
    }
  }
  &__subtitle {
    &-forgot-password {
      font-size: 20px;
      font-weight: 500;
      line-height: 1.15;
      max-width: 630px;
      text-align: center;
      margin: 0 auto 60px;
      @media (max-width: 900px) {
        margin: 0 auto 30px;
      }
    }
  }
  &__observer {
    display: inline-block;
    width: 100%;
    margin-bottom: 20px;
    span {
      position: relative;
      width: 100%;
    }
  }
  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 680px;
    width: 100%;
  }
  &__input {
    font-size: 20px;
    line-height: 1.15;
    max-width: 680px;
    width: 100%;
    height: 70px;
    background-color: #F6F6F6;
    border-radius: 5px;
    padding: 23px 60px;
    border: none;
    @media (max-width: 1024px) {
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
      & + .forgot-password-modal__error {
      margin-bottom: 20px;
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
  &__back-signin {
    display: block;
    font-size: 20px;
    line-height: 1.15;
    max-width: 285px;
    margin-left: auto;
    border: none;
    border-bottom: 1px solid #000;
  }
  &__close {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 35px;
    right: 35px;
    width: 25px;
    height: 25px;
    cursor: pointer;
    span {
      position: absolute;
      width: 3px;
      height: 25px;
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
