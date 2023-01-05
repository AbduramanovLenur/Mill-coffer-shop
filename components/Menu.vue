<template>
  <ul :class="b()">
    <li :class="b('item')" v-for="item in menu" :key="item.id">
      <nuxt-link :class="b('link')" :to="item.link">
        {{ item.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Menu",
  data: () => {
    return {
      menu: [
        {
          id: 1,
          title: "Блог",
          link: "/blog"
        },
        {
          id: 2,
          title: "Каталог товаров",
          link: "/catalog"
        },
        {
          id: 2,
          title: "Контакты",
          link: "/contact"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  align-items: center;
  gap: 100px;
  @media (max-width: 1152px) {
    gap: 50px;
  }
  @media (max-width: 540px) {
    gap: 20px;
    flex-direction: column;
    align-items: start;
  }
  &__link {
    line-height: 1.16;
    @media (max-width: 1152px) {
      font-size: 20px;
    }
    @media (max-width: 540px) {
      font-size: 18px;
    }
  }
}
</style>
