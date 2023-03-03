<template>
  <ul :class="b()">
    <li :class="b('item')" v-for="item in menu" :key="item.id">
      <nuxt-link :class="b('link')" :to="item.link">
        {{ item.title[$i18n.locale] }}
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
          title: {
            ru: "Каталог товаров",
            en: "Catalog"
          },
          link: "Catalog"
        },
        {
          id: 2,
          title: {
            ru: "Блог",
            en: "Blog"
          },
          link: "Blog"
        },
        {
          id: 3,
          title: {
            ru: "Контакты",
            en: "Contacts"
          },
          link: "Contact"
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
    padding-bottom: 4px;
    position: relative;
    transition: 0.5s;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0%;
      height: 2px;
      background: var(--red);
      transition: 0.4s ease-out;
    }
    @media (max-width: 1152px) {
      font-size: 20px;
    }
    @media (max-width: 540px) {
      font-size: 18px;
    }
  }
}

@media (hover: hover) {
  .menu {
    &__link {
      &:hover::after {
          left: 0;
          width: 100%;
      }
    }
  }
}
</style>
