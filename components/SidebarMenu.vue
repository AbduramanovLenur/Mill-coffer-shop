<template>
  <ul :class="b('')">
    <li :class="b('item')" v-for="item in menu" :key="item.id" @click="activeClass">
      <nuxt-link :to="item.to" :class="b('link')">
        {{ item.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SidebarMenu",
  data: () => {
    return {
      menu: [
        {
          id: 1,
          title: "Каталог товаров",
          to: "catalog"
        },
        {
          id: 2,
          title: "Блог",
          to: "blog"
        },
        {
          id: 3,
          title: "Контакты",
          to: "contact"
        }
      ]
    }
  },
  methods: {
    activeClass() {
      this.$store.dispatch('addActiveClass');
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-menu {
  display: flex;
  flex-direction: column;
  gap: 20px;
  &__link {
    max-width: 300px;
  }
}
</style>
