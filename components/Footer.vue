<template>
  <footer :class="b()">
    <div class="container">
      <div :class="b('inner')">
        <div :class="b('logo')">
          <nuxt-link :class="b('link')" to="/">
            <img src="@/assets/images/logo.png" alt="logo">
          </nuxt-link>
        </div>
        <Menu />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
.footer {
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px 0;
    padding: 100px 0;
    @media (max-width: 1024px) {
      padding: 50px 0;
    }
    @media (max-width: 800px) {
      flex-direction: column;
      justify-content: initial;
    }
    @media (max-width: 540px) {
      align-items: start;
    }
  }
}
</style>
