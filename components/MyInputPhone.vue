<template>
  <ValidationProvider
    name="phone"
    :rules="{ required: true, min: 3 }"
    v-slot="validationContext"
  >
    <input
      :class="{'my-input-phone': b('input'), 'isError': validationContext.errors[0]}"
      type="text"
      placeholder='+### (##) ###-##-##'
      name="phone"
      :state="getValidationState(validationContext)"
      :value="value"
      @input="$emit('input', $event.target.value)"
      v-mask="'+### (##) ###-##-##'"
    >
    <div :class="b('error')" v-if="validationContext.errors[0]">
      {{ validationContext.errors[0] }}
    </div>
  </ValidationProvider>
</template>

<script>
export default {
  name: "MyInputPhone",
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
.my-input-phone {
  font-size: 16px;
  line-height: 1.31;
  max-width: 700px;
  width: 100%;
  height: 70px;
  background-color: #F3F3F3;
  border-radius: 5px;
  padding: 25px 40px;
  border: none;
  margin-bottom: 10px;
  @media (max-width: 960px) {
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
  & + .my-input-phone__error {
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
