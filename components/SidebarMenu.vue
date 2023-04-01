<template>
  <ul :class="b('')">
    <li :class="b('item')" v-for="item in menu" :key="item.id" @click="addActiveClass">
      <nuxt-link :to="item.to" :class="b('link')">
        {{ item.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import { useActiveStore } from '@/store/ActiveStore.js';
import { mapActions } from 'pinia';
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
    ...mapActions(useActiveStore, ['addActiveClass'])
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
