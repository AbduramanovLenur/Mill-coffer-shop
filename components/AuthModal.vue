<template>
  <div :class="{ 'auth-modal': b(''), 'isActive': isOpenAuthModal }" @click="addIsOpenAuthModal('desktop')">
    <div :class="b('overlay')" @click.stop>
      <FormBoxModal>
        <template v-slot:title>
          {{ $t('registrationTitle') }}
        </template>
        <template v-slot:subtitle>
          {{ $t('promoSubtitle') }}
        </template>
        <template v-slot:btn>
          {{ $t('signUp') }}
        </template>
      </FormBoxModal>
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
              <MyInputEmailModal v-model="form.email" />
              <MyInputPasswordModal v-model="form.password" />
              <ButtonModal>
                {{ $t('signIn') }}
              </ButtonModal>
            </form>
          </ValidationObserver>
          <button :class="b('forgot-password')">
            {{ $t('forgotPassword') }}
          </button>
        </div>
        <div :class="b('close')" @click="addIsOpenAuthModal('desktop')">
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
import { useAuthStore } from '@/store/AuthStore.js';

export default {
  name: 'AuthModal',
  data: () => ({
    form: {
      email: '',
      password: ''
    }
  }),
  methods: {
    ...mapActions(useModalsStore, ['addIsOpenAuthModal']),
    ...mapActions(useAuthStore, ['login']),
    async submitForm() {
      const isValid = await this.$refs.observer.validate();

      if (isValid) {
        this.login(this.form);
        this.addIsOpenAuthModal('desktop');
        this.form = {
          email: '',
          password: ''
        }
      }
    }
  },
  computed: {
    ...mapState(useModalsStore, ['isOpenAuthModal'])
  }
}
</script>

<style lang="scss" scoped>
.auth-modal {
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
    &-auth {
      font-size: 40px;
      font-weight: 900;
      line-height: 1.25;
      margin: 0 auto 70px;
      max-width: 460px;
      text-align: center;
      @media (max-width: 1200px) {
        font-size: 30px;
        margin: 0 auto 40px;
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
  &__forgot-password {
    display: block;
    font-size: 20px;
    line-height: 1.15;
    max-width: 160px;
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
