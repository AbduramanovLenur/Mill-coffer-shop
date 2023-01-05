<template>
  <section :class="b()">
    <div class="container">
      <div :class="b('inner')">
        <Title :class="b('title')" :pxMargin="100" :maxWidth="740" fzColor="fff">
          Как мы обжариваем наш кофе:
        </Title>
        <p :class="b('text')">
          Компания Нью Рефайнинг Груп находится в г. Калининграде и имеет свой склад и представительство
          в Москве. Завод работает на рынке свежеобжаренного кофе и растворимой продукции более 15 лет. Завод имеет немецкое оборудование марки Probat по обжарке кофе и итальянские агломераторы
          для производства растворимой продукции.
          <br>
          <br>
          Кофе поставляется в контейнерах напрямую с плантаций по всему миру. Компания имеет долгосрочные контракты по поставке продукции. Каждая партия проходит строгий контроль на заводе для проверки зерна. Зеленое зерно обжаривается, проходит процесс дегазации и тут же отправляется клиентам. Наши обжарщики прошли обучение в России и за рубежом.
          У нас свой подход к каждой партии зерна.
          <br>
          <br>
          Мы раскрываем вкус каждого сорта кофе.
        </p>
        <nuxt-link :class="b('link')" to="#">
          Перейти в каталог
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Roasting"
}
</script>

<style lang="scss" scoped>
.roasting {
  @media (max-width: 1152px) {
    background-image: url("@/assets/images/roasting/roasting-bg.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  &__inner {
    padding: 143px 0 153px;
    @media (max-width: 864px) {
      padding: 70px 0;
    }
  }
  &__text {
    color: #fff;
    max-width: 1246px;
    margin-bottom: 100px;
    @media (max-width: 768px) {
      font-size: 20px;
      margin-bottom: 50px;
    }
  }
  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: #fff;
    background-color: var(--color-btn);
    max-width: 400px;
    width: 100%;
    height: 80px;
    padding: 22px;
    transition: 0.5s;
  }
}

@media (hover: hover) {
  .roasting {
    &__link {
      &:hover {
        background-color: var(--hover-color-btn);
      }
    }
  }
}
</style>
