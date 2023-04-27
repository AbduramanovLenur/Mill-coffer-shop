<template>
  <button :class="b()">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton"
}
</script>

<style lang="scss" scoped>
.my-button {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  height: 70px;
  width: 100%;
  background-color: #F9B300;
  border-radius: 5px;
  padding: 20px;
  @media (max-width: 480px) {
    height: 60px;
    padding: 10px
  }
}
</style>
