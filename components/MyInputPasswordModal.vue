<template>
  <ValidationProvider
    name="password"
    :rules="{ required: true, min: 3 }"
    v-slot="validationContext"
  >
    <input
      :class="{'my-input-password-modal': b('input'), 'isError': validationContext.errors[0]}"
      :type="isHide ? 'text' : 'password'"
      :placeholder="$t('passwordPlaceholder')"
      name="password"
      :state="getValidationState(validationContext)"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    <div :class="b('error')" v-if="validationContext.errors[0]">
      {{ validationContext.errors[0] }}
    </div>
    <span :class="b('hide')" @click="changHidePassword()">
      <Icon name="hide"/>
    </span>
  </ValidationProvider>
</template>

<script>
export default {
  name: "MyInputPasswordModal",
  props: {
    value: {
      type: [String, Number],
      default: () => ''
    }
  },
  data: () => ({
    isHide: false
  }),
  methods: {
    changHidePassword() {
      this.isHide ? this.isHide = false : this.isHide = true;
    },
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    }
  }
}
</script>

<style lang="scss" scoped>
.my-input-password-modal {
  font-size: 20px;
  line-height: 1.15;
  max-width: 680px;
  width: 100%;
  height: 70px;
  background-color: #F6F6F6;
  border-radius: 5px;
  padding: 23px 60px;
  border: none;
  margin-bottom: 10px;
  @media (max-width: 1024px) {
    padding: 23px 30px;
  }
  &.isError {
    border: 1px solid #ff0000;
  }
  &::placeholder {
    color: #C9C9C9;
  }
  &:not(.isError) {
    margin-bottom: 30px;
    & + .my-input-password-modal__hide {
      top: 30%;
      transform: translateY(-30%);
    }
  }
  & + .my-input-password-modal__error {
    margin-bottom: 30px;
  }
  &:focus {
    outline: none;
  }
  &__hide {
    width: initial !important;
    position: absolute !important;
    top: 20%;
    right: 3%;
    transform: translateY(-20%);
  }
  &__error {
    font-size: 16px;
    color: #ff0000;
    transition: 0.5s;
  }
}
</style>
