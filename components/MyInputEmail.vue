<template>
  <ValidationProvider
    name="email"
    :rules="{ required: true, min: 3, email: true }"
    v-slot="validationContext"
  >
    <input
      :class="{'my-input-email': b('input'), 'isError': validationContext.errors[0]}"
      type="email"
      placeholder="Email"
      name="email"
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
  name: "MyInputEmail",
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
.my-input-email {
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
  & + .my-input-email__error {
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
