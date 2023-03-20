<template>
  <ValidationObserver ref="observer">
    <form :class="b('')" @submit.prevent="submitForm">
      <h2 :class="b('title basket-title')">
        {{ $t('deliveryTitle') }}
      </h2>
      <div :class="b('wrapper')">
        <MyInput
          v-for="item in inputs"
          :key="item.id"
          :input="item"
          v-model="formPay[item.key]"
        />
      </div>
      <button :class="b('submit')">
        {{ $t('сalculateButton') }}
      </button>
    </form>
  </ValidationObserver>
</template>

<script>
import inputs from '@/utils/inputs.js';

export default {
  name: "BasketForm",
  data: () => {
    return {
      formPay: {
        name: '',
        country: '',
        surname: '',
        city: '',
        phone: '',
        streetHouse: '',
        email: '',
        postcode: '',
        companyName: '',
        orderComment: ''
      },
      keyObject: []
    }
  },
  methods: {
    submitForm() {
      this.$refs.observer.validate();
      console.log("Go to Server")
    }
  },
  computed: {
    inputs() {
      return inputs;
    }
  }
}
</script>

<style lang="scss" scoped>
.basket-form {
  background-color: #FFFFFF;
  border: 1px solid #E4E4E4;
  box-shadow: 0px 0px 35.4254px rgba(163, 163, 163, 0.25);
  border-radius: 14px;
  padding: 70px 140px;
  @media (max-width: 1024px) {
    padding: 60px;
  }
  @media (max-width: 768px) {
    padding: 40px 30px;
  }
  &__title {
    margin-bottom: 50px;
    @media (max-width: 1024px) {
      margin-bottom: 35px;
    }
    @media (max-width: 768px) {
      margin-bottom: 25px;
    }
  }
  &__wrapper {
    --grid-template-columns: 2;
    display: grid;
    grid-template-columns: repeat(var(--grid-template-columns), 1fr);
    gap: 15px 20px;
    margin-bottom: 40px;
    @media (max-width: 768px) {
      --grid-template-columns: 1;
    }
    @media (max-width: 480px) {
      margin-bottom: 20px;
    }
  }
  &__submit {
    font-size: 25px;
    font-weight: 600;
    line-height: 1.2;
    color: #F9B300;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1380px;
    width: 100%;
    height: 70px;
    padding: 20px;
    background-color: #FFF7E1;
    border: 1px solid #F9B300;
    border-radius: 5px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
    @media (max-width: 480px) {
      font-size: 18px;
    }
  }
}
</style>
