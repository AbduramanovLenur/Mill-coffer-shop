<template>
  <footer :class="b()">
    <div class="container">
      <div :class="b('inner')">
        <div :class="b('logo')">
          <nuxt-link :class="b('link')" to="/">
            <img src="@/assets/images/logo.png" alt="logo">
          </nuxt-link>
        </div>
        <div :class="b('languages')">
          <nuxt-link
            :class="b('language')"
            v-for="locale in $i18n.locales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
          >
            <span @click="localize(locale.code)">
              {{ locale.name }}
            </span>
          </nuxt-link>
        </div>
        <Menu />
      </div>
    </div>
  </footer>
</template>

<script>
import { localize } from 'vee-validate';

export default {
  name: "Footer",
  data: () => ({
    lang: ''
  }),
  methods: {
    localize(locale) {
      return localize(locale)
    }
  },
  mounted() {
    localize(this.$i18n.locale)
  }
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
  &__languages {
    display: flex;
    gap: 10px;
  }
}
</style>
