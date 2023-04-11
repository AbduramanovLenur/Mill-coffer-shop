<template>
  <button :class="b('')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonModal"
}
</script>

<style lang="scss" scoped>
.button-modal {
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 680px;
  width: 100%;
  background-color: var(--color-btn);
  height: 70px;
  border-radius: 5px;
  transition: 0.5s;
  border: none;
  @media (max-width: 960px) {
    height: 60px;
  }
}

@media (hover: hover) {
  .button-modal {
    &:hover {
      background-color: var(--hover-color-btn);
    }
  }
}
</style>
