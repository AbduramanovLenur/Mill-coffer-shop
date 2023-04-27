<template>
  <div :class="{ 'sign-up-modal': b(''), 'isActive': isOpenRegisterModal }" @click="addIsOpenRegisterModal('desktop')">
    <div :class="b('overlay')" @click.stop>
      <FormBoxModal>
        <template v-slot:title>
          {{ $t('welcomeTitle') }}
        </template>
        <template v-slot:subtitle>
          {{ $t('haveAccountSubtitle') }}
        </template>
        <template v-slot:btn>
          {{ $t('signInBtn') }}
        </template>
      </FormBoxModal>
      <div :class="b('forms')">
        <div :class="b('wrapper')">
          <div :class="b('logo')">
            <img src="@/assets/images/modals/logo.png" alt="logo">
          </div>
          <h3 :class="b('title-signUp')">
            {{ $t('registrationTitle') }}
          </h3>
          <ValidationObserver ref="observer" :class="b('observer')">
            <form :class="b('form')" @submit.prevent="submitForm">
              <MyInputNameModal v-model="form.name" />
              <MyInputEmailModal v-model="form.email" />
              <MyInputPhoneModal v-model="form.phone" />
              <MyInputPasswordModal v-model="form.password" />
              <ButtonModal>
                {{ $t('registerBtn') }}
              </ButtonModal>
            </form>
          </ValidationObserver>
        </div>
        <div :class="b('close')" @click="addIsOpenRegisterModal('desktop')">
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
  name: "SignUpModal",
  data: () => ({
    form: {
      email: '',
      password: '',
      name: '',
      phone: ''
    },
  }),
  methods: {
    ...mapActions(useModalsStore, ['addIsOpenRegisterModal', 'addIsOpenAuthModal']),
    ...mapActions(useAuthStore, ['register']),
    async submitForm() {
      const isValid = await this.$refs.observer.validate();

      if (isValid) {
        this.register(this.form);
        this.addIsOpenRegisterModal('desktop');
        if (this.errorRegister) {
          this.$toast.error('Ошибка');
        } else {
          this.$toast.success('Пользователь зарегистрирован!');
        }

        this.form = {
          email: '',
          password: '',
          name: '',
          phone: ''
        }
      }
    }
  },
  computed: {
    ...mapState(useModalsStore, ['isOpenRegisterModal']),
    ...mapState(useAuthStore, ['errorRegister'])
  }
}
</script>

<style lang="scss" scoped>
.sign-up-modal {
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
    padding: 20px 11.7%;
    width: 100%;
    @media (max-width: 1024px) {
      padding: 20px 7.7%;
    }
  }
  &__logo {
    margin: 0 auto 20px;
    max-width: 155px;
    @media (max-width: 1200px) {
      margin-bottom: 20px;
    }
  }
  &__title {
    &-sign-up {
      font-size: 40px;
      font-weight: 900;
      line-height: 1.25;
      margin: 0 auto 20px;
      max-width: 460px;
      text-align: center;
      @media (max-width: 1200px) {
        font-size: 30px;
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
