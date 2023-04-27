<template>
  <div :class="b('')">
    <div :class="b('wrapper')">
      <h3 :class="b('title-register')">
        <slot name="title"></slot>
      </h3>
      <div :class="b('subtitle')">
        <slot name="subtitle"></slot>
      </div>
      <button :class="b('sign-up')" @click="multyFunction('desktop')">
        <slot name="btn"></slot>
      </button>
    </div>
    <img :class="b('decor')" src="@/assets/images/modals/decor.png" alt="decor">
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import { useModalsStore } from '@/store/ModalsStore.js';

export default {
  name: 'FormBox',
  methods: {
    ...mapActions(useModalsStore, ['addIsOpenAuthModal', 'addIsOpenRegisterModal']),
    multyFunction(orientation) {
      this.addIsOpenAuthModal(orientation);
      this.addIsOpenRegisterModal(orientation);
    }
  }
}
</script>

<style lang="scss" scoped>
.form-box {
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
      max-width: 330px;
      margin-bottom: 25px;

      @media (max-width: 960px) {
        font-size: 30px;
      }
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
}

@media (hover: hover) {
  .form-box {
    &__sign-up {
      &:hover {
        background-color: #fff;
        color: #F9B300;
      }
    }
  }
}
</style>
