<template>
  <div :class="b('')">
    <div :class="b('decrement')" @click="$emit('decrement')">-</div>
    <div :class="b('value')">{{ quantity }}</div>
    <div :class="b('icrement')" @click="$emit('icrement')">+</div>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: {
    quantity: {
      type: Number,
      default: () => 0
    }
  }
}
</script>

<style lang="scss" scoped>
.counter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #F6F6F6;
  border: 1px solid #D6D6D6;
  border-radius: 4px;
  width: 110px;
  height: 35px;
  padding: 10px 15px;
  &__decrement,
  &__icrement {
    font-size: 25px;
    font-weight: 500;
    line-height: 1.16;
    cursor: pointer;
  }
  &__value {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.21;
    @media (max-width: 480px) {
      font-size: 18px;
    }
  }
}
</style>
