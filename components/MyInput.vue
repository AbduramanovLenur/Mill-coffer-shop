<template>
  <ValidationProvider
    :name="input.key"
    :rules="{required: input.required, min: 3}"
    v-slot="validationContext"
  >
    <input
      :class="{'my-input': b(''), 'isError': validationContext.errors[0]}"
      :type="input.type"
      :placeholder="input.placeholder[$i18n.locale]"
      :required="input.required"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :name="input.key"
      :state="getValidationState(validationContext)"
    >
    <div :class="b('error')" v-if="validationContext.errors[0]">
      {{ validationContext.errors[0] }}
    </div>
  </ValidationProvider>
</template>

<script>

export default {
  name: "MyInput",
  props: {
    input: {
      type: Object,
      default: () => { }
    },
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
.my-input {
  font-size: 20px;
  line-height: 1.15;
  color: #222;
  background-color: #FCFCFC;
  border: 1px solid #F6F6F6;
  border-radius: 4px;
  height: 70px;
  max-width: 680px;
  width: 100%;
  padding: 16px 40px;
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 16px 20px;
  }
  &.isError {
    border: 1px solid #ff0000;
  }
  &::placeholder {
    color: #C4C4C4;
  }
  &:focus {
    outline: none;
  }
  &.isActive {
    margin-bottom: 5px;
    &:focus {
        outline: #ff0000;
    }
  }
  &__error {
    font-size: 16px;
    color: #ff0000;
    margin-top: 10px;
    transition: 0.5s;
  }
}
</style>


