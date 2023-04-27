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
          <MyInputName v-model="form.name" />
          <MyInputEmail v-model="form.email" />
          <MyInputPhone v-model="form.phone" />
          <MyInputPassword v-model="form.password" />
          <MyButton>
            {{ $t('registerBtn') }}
          </MyButton>
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
import { useAuthStore } from '@/store/AuthStore.js';

export default {
  name: "SignUpMobileModal",
  data: () => ({
    form: {
      email: '',
      password: '',
      name: '',
      phone: ''
    }
  }),
  methods: {
    ...mapActions(useModalsStore, ['addIsOpenAuthModal', 'addIsOpenRegisterModal']),
    ...mapActions(useAuthStore, ['register']),
    async submitForm() {
      const isValid = await this.$refs.observer.validate();

      if (isValid) {
        this.register(this.form);
        this.addIsOpenRegisterModal('mobile');
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
    },
    multyFunction(orientation) {
      this.addIsOpenAuthModal(orientation);
      this.addIsOpenRegisterModal(orientation);
    }
  },
  computed: {
    ...mapState(useModalsStore, ['isOpenRegisterMobileModal']),
    ...mapState(useAuthStore, ['errorRegister'])
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
