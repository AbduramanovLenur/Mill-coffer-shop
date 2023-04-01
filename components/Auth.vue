<template>
  <div :class="{ 'auth': b(''), 'isActive': isOpenAuthModal }" @click="addIsOpenAuthModal()">
    <div :class="b('overlay')" @click.stop>
      <div :class="b('box')">
        <div :class="b('wrapper')">
          <h3 :class="b('title-register')">
            {{ $t('registrationTitle') }}
          </h3>
          <div :class="b('subtitle')">
            {{ $t('promoSubtitle') }}
          </div>
          <button :class="b('sign-up')">
            {{ $t('signUp') }}
          </button>
        </div>
        <img :class="b('decor')" src="@/assets/images/modals/decor.png" alt="decor">
      </div>
      <div :class="b('forms')">
        <div :class="b('wrapper')">
          <div :class="b('logo')">
            <img src="@/assets/images/modals/logo.png" alt="logo">
          </div>
          <h3 :class="b('title-auth')">
            {{ $t('loginAccountTitle') }}
          </h3>
          <ValidationObserver ref="observer" :class="b('observer')">
            <form :class="b('form')" @submit.prevent="submitForm">
              <ValidationProvider
                name="email"
                :rules="{ required: true, min: 3, email: true }"
                v-slot="validationContext"
              >
                <input
                  :class="{'auth__input': b('input'), 'isError': validationContext.errors[0]}"
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
                  :class="{'auth__input': b('input'), 'isError': validationContext.errors[0]}"
                  type="text"
                  :placeholder="$t('passwordPlaceholder')"
                  name="password"
                  :state="getValidationState(validationContext)"
                  v-model="form.password"
                >
                <div :class="b('error')" v-if="validationContext.errors[0]">
                  {{ validationContext.errors[0] }}
                </div>
              </ValidationProvider>
              <button :class="b('button')">
                {{ $t('signIn') }}
              </button>
              <button :class="b('forgot-password')">
                {{ $t('forgotPassword') }}
              </button>
            </form>
          </ValidationObserver>
        </div>
        <div :class="b('close')" @click="addIsOpenAuthModal()">
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
  name: 'Auth',
  data: () => ({
    form: {
      email: '',
      password: ''
    }
  }),
  methods: {
    ...mapActions(useModalsStore, ['addIsOpenAuthModal']),
    async submitForm() {
      const isValid = await this.$refs.observer.validate();

      if (isValid) {
        console.log('Server GO')
      }
    },
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    }
  },
  computed: {
    ...mapState(useModalsStore, ['isOpenAuthModal'])
  }
}
</script>

<style lang="scss" scoped>
.auth {
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
  &__box {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    background-color: #F9B300;
    border-radius: 30px 0px 0px 30px;
    padding: 425px 30px 60px;
    @media (max-width: 1200px) {
      padding: 350px 30px 60px;
    }
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  &__title {
    &-register {
      font-size: 35px;
      line-height: 1.25;
      font-weight: 900;
      color: #fff;
      max-width: 220px;
      margin-bottom: 25px;
      @media (max-width: 960px) {
        font-size: 30px;
      }
    }
    &-auth {
      font-size: 40px;
      font-weight: 900;
      line-height: 1.25;
      margin-bottom: 70px;
      max-width: 460px;
      text-align: center;
      @media (max-width: 1200px) {
        font-size: 30px;
        margin-bottom: 40px;
      }
    }
  }
  &__observer {
    width: 100%;
    span {
      width: 100%;
    }
  }
  &__subtitle {
    max-width: 320px;
    line-height: 1.16;
    margin-bottom: 90px;
    color: #fff;
    @media (max-width: 1200px) {
      margin-bottom: 50px;
    }
    @media (max-width: 960px) {
        font-size: 20px;
    }
  }
  &__sign-up {
    font-size: 25px;
    line-height: 1.16;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 340px;
    width: 100%;
    height: 70px;
    border: 2px solid #FFFFFF;
    border-radius: 5px;
    transition: 0.5s;
    @media (max-width: 960px) {
      height: 60px;
    }
  }
  &__decor {
    position: absolute;
    top: -35px;
    left: 0;
    width: calc(100% + 120px);
    max-width: initial;
    @media (max-width: 1200px) {
      width: calc(100% + 80px);
    }
  }
  &__forms {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0px 30px 30px 0px;
    padding: 60px 11.7%;
    width: 100%;
    @media (max-width: 960px) {
      padding: 60px 7.7%;
    }
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
    span {
      position: absolute;
      width: 3px;
      height: 25px;
      background-color: #000;
      &:first-child {
        transform: rotate(45deg);
      }
      &:last-child {
        transform: rotate(-45deg);
      }
    }
  }
  &__logo {
    margin-bottom: 50px;
    @media (max-width: 1200px) {
      margin-bottom: 20px;
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
      & + .auth__error {
      margin-bottom: 20px;
      }
    }
    &[name=password] {
      margin-bottom: 10px;
      &:not(.isError) {
        margin-bottom: 30px;
      }
      & + .auth__error {
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
  &__button {
    font-weight: 700;
    line-height: 1.2;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 680px;
    width: 100%;
    background-color: var(--color-btn);
    height: 70px;
    margin-bottom: 20px;
    border-radius: 5px;
    transition: 0.5s;
    border: none;
    @media (max-width: 960px) {
      height: 60px;
    }
  }
  &__forgot-password {
    font-size: 20px;
    line-height: 1.15;
    max-width: 160px;
    margin-left: auto;
    border: none;
  }
}

@media (hover: hover) {
  .auth {
    &__sign-up {
      &:hover {
        background-color: #fff;
        color: #F9B300;
      }
    }
    &__button {
      &:hover {
        background-color: var(--hover-color-btn);
      }
    }
  }
}
</style>
