<template>
  <section :class="b()" id="catalog">
    <div class="container">
      <div :class="b('inner')">
        <Title :class="b('title')" :pxMargin="83" :maxWidth="670">
          Каталоги нашей продукции
        </Title>
        <ul :class="b('list')">
          <li :class="b('item')" v-for="item in products" :key="item.id" data-aos="flip-left" data-aos-duration="1000">
            <article :class="b('card')">
              <div :class="b('wrapper')">
                <img :class="b('image')" :src="require('@/assets/images/catalog/' + item.img)" :alt="item.alt" height="275" width="255">
                <div :class="b('text')">
                  {{ item.title }}
                </div>
              </div>
              <nuxt-link :class="b('link')" to="#">
                {{ item.button }}
              </nuxt-link>
            </article>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Catalog",
  data: () => {
    return {
      products: [
        {
          id: 1,
          title: "Свежеобжаренный кофе",
          img: "catalog-1.png",
          alt: "catalog",
          button: "Купить"
        },
        {
          id: 2,
          title: "Чай и кофейные напитки",
          img: "catalog-2.png",
          alt: "catalog",
          button: "Купить"
        },
        {
          id: 3,
          title: "Продукция для вендинга",
          img: "catalog-3.png",
          alt: "catalog",
          button: "Купить"
        },
        {
          id: 4,
          title: "Здоровое питание",
          img: "catalog-4.png",
          alt: "catalog",
          button: "Купить"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  &__inner {
    padding: 138px 0 30px;
    @media (max-width: 1024px) {
      padding: 30px 0;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__card {
    height: 540px;
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 30px rgba(146, 146, 146, 0.2);
    border-radius: 20px;
    padding: 65px 36px;
    cursor: pointer;
    transition: 0.5s;
    @media (max-width: 1200px) {
      height: 450px;
      padding: 45px 20px;
    }
    @media (max-width: 1024px) {
      height: 540px;
    }
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__image {
    width: 253px;
    height: 275px;
    object-fit: contain;
    margin-bottom: 30px;
  }
  &__text {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    max-width: 355px;
    text-align: center;
    cursor: pointer;
  }
  &__link {
    display: none;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    line-height: 1.2;
    background-color: var(--color-btn);
    border-radius: 5px;
    max-width: 330px;
    width: 100%;
    height: 60px;
    color: #fff;
    cursor: pointer;
    transition: 0.5s;
    @media (max-width: 1024px) {
      display: flex;
      margin-top: 50px;
    }
  }
}
@media (hover: hover) {
  .catalog {
    &__card {
      &:hover {
        -webkit-box-shadow: 0px 0px 50px 12px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0px 0px 50px 12px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 0px 50px 12px rgba(0, 0, 0, 0.2);
      }
      &:hover .catalog__link {
        display: flex;
      }
      &:hover .catalog__wrapper {
        margin-top: -135px;
        margin-bottom: 50px;
      }
    }
    &__link {
      &:hover {
        background-color: var(--hover-color-btn);
      }
    }
  }
}
</style>
