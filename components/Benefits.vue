<template>
  <section :class="b()">
    <div class="container">
      <div :class="b('inner')">
        <div :class="b('box')">
          <div :class="b('picture')" data-aos="fade-up" data-aos-duration="1000">
            <img src="@/assets/images/benefits/cup-grains.png" alt="cup-grains">
          </div>
        </div>
        <div :class="b('box')">
          <Title :class="b('title')" :pxMargin="80" :maxWidth="585">
            {{ $t('working') }}
          </Title>
          <ul :class="b('list')">
            <li :class="b('item')" v-for="item in benefits" :key="item.id" data-aos="flip-up" data-aos-duration="1000">
              <div :class="b('wrapper')">
                <div :class="b('icon')">
                  <Icon :name="item.svg" />
                </div>
                <div :class="b('content')">
                  <h3 :class="b('content-title')">
                    {{ item.title[$i18n.locale] }}
                  </h3>
                  <div :class="b('content-text')">
                    {{ item.text[$i18n.locale] }}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div :class="b('bg')"></div>
  </section>
</template>

<script>
export default {
  name: "Benefits",
  data: () => {
    return {
      benefits: [
        {
          id: 1,
          svg: "benefits-1",
          title: {
              ru: "Всегда свежая обжарка",
              en: "Always fresh roasted"
          },
          text: {
            ru: "Подбор степени обжарки под каждый сорт кофе. Всегда свежая обжарка.",
            en: "Selection of the degree of roasting for each type of coffee. Always fresh roasted."
          }
        },
        {
          id: 2,
          svg: "benefits-2",
          title: {
            ru: "Лучшие цены на продукцию",
            en: "The best prices for products"
          },
          text: {
            ru: "Благодаря крупным объемам производства мы даем лучшие цены на нашу продукцию.",
            en: "Due to the large volumes of production, we give the best prices for our products."
          }
        },
        {
          id: 3,
          svg: "benefits-3",
          title: {
            ru: "Консультации 24/7",
            en: "Consultations 24/7"
          },
          text: {
            ru: "Наши специалисты готовы всегда помочь и подсказать вам с выбором кофе или другой продукции.",
            en: "Our specialists are always ready to help and advise you with the choice of coffee or other products."
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.benefits {
  @media (max-width: 1152px) {
    background-color: #FFF7E1;
  }
  &__inner {
    display: flex;
    align-items: center;
    gap: 85px;
    padding: 58px 0 143px;
    @media (max-width: 1440px) {
      gap: 40px;
    }
    @media (max-width: 1152px) {
      flex-direction: column;
      gap: 30px;
    }
    @media (max-width: 1024px) {
      padding: 45px 0;
    }
  }
  &__box {
    &:first-child {
      @media (max-width: 1152px) {
        order: 2;
      }
    }
  }
  &__picture {
    padding-top: 100px;
    @media (max-width: 1152px) {
       padding-top: 20px;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 60px;
    @media (max-width: 1152px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 960px) {
      display: flex;
    }
    @media (max-width: 576px) {
      gap: 30px;
    }
  }
  &__wrapper {
    display: flex;
    gap: 50px;
    @media (max-width: 576px) {
      gap: 20px;
    }
    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
    }
  }
  &__content {
    max-width: 455px;
    &-title {
      font-size: 30px;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 20px;
      @media (max-width: 768px) {
        font-size: 24px;
      }
      @media (max-width: 480px) {
        text-align: center;
      }
    }
    &-text {
      font-weight: 500;
      line-height: 1.28;
      @media (max-width: 768px) {
        font-size: 20px;
      }
      @media (max-width: 480px) {
        text-align: center;
      }
    }
  }
}
</style>
