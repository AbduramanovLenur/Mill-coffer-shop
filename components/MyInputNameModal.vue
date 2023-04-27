<template>
  <ValidationProvider
    name="name"
    :rules="{ required: true, min: 3 }"
    v-slot="validationContext"
  >
    <input
      :class="{'my-input-name-modal': b('input'), 'isError': validationContext.errors[0]}"
      type="text"
      :placeholder="$t('namePlaceholder')"
      name="name"
      :state="getValidationState(validationContext)"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    <div :class="b('error')" v-if="validationContext.errors[0]">
      {{ validationContext.errors[0] }}
    </div>
  </ValidationProvider>
</template>

<script>
export default {
  name: "MyInputNameModal",
  props: {
    value: {
      type: [String, Number],
      default: () => ''
    }
  },
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    }
  }
}
</script>

<style lang="scss" scoped>
.my-input-name-modal {
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
    margin-bottom: 20px;
  }
  & + .my-input-name-modal__error {
    margin-bottom: 20px;
  }
  &:focus {
    outline: none;
  }
  &__error {
    font-size: 16px;
    color: #ff0000;
    transition: 0.5s;
  }
}
</style>
