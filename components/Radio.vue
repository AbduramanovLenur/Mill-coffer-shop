<template>
  <div :class="b('wrapper')">
    <div :class="b('radio')" @click="$emit('getBank', 'visa')">
      <input id="radio-1" type="radio" name="radio" value="1" checked>
      <label for="radio-1">Visa</label>
    </div>
    <div :class="b('radio')" @click="$emit('getBank', 'mastercard')">
      <input id="radio-2" type="radio" name="radio" value="2">
      <label for="radio-2">MasterCard</label>
    </div>
    <div :class="b('radio')" @click="$emit('getBank', 'tinkoff')">
      <input id="radio-3" type="radio" name="radio" value="3">
      <label for="radio-3">Tinkoff</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Radio"
}
</script>

<style lang="scss" scoped>
.radio {
  &__wrapper {
    display: flex;
    gap: 20px;
    cursor: pointer;
    @media (max-width: 768px) {
      gap: 8px;
    }
  }
  &__radio input[type=radio] {
    display: none;
    cursor: pointer;
  }
  &__radio label {
    font-size: 18px;
    display: inline-block;
    cursor: pointer;
    position: relative;
    padding-left: 25px;
    margin-right: 0;
    line-height: 18px;
    user-select: none;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 16px;
      padding-left: 20px;
    }
  }
  &__radio label:before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    position: absolute;
    left: 0;
    bottom: 1px;
    background: url("@/assets/images/radio/radio.png") 0 0 no-repeat;
    cursor: pointer;
  }
  /* Checked */
  &__radio input[type=radio]:checked+label:before {
    background: url("@/assets/images/radio/radio-checked.png") 0 0 no-repeat;
    cursor: pointer;
  }
  /* Disabled */
  &__radio input[type=radio]:disabled+label:before {
    filter: grayscale(100%);
    cursor: pointer;
  }
}</style>
