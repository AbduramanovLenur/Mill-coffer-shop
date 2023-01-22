<template>
  <section :class="b()">
    <div class="container">
      <div :class="b('inner')" data-aos="fade-right" data-aos-duration="1000">
        <Title :maxWidth="800" :pxMargin="50">
          Подписка на новости и рассылку
        </Title>
        <p :class="b('text')">
          Подпишитесь на нашу рассылку прямо сейчас и будьте в курсе новых поставок, скидок и эксклюзивных предложений.
        </p>
        <form :class="b('form')">
          <input :class="b('input')" type="text" placeholder="Ваш email">
          <button :class="b('button')">
            Подписаться
          </button>
          <div :class="b('faq')">
            Нажимая на кнопку “Подписаться”, вы принимаете правила <a :class="b('faq-link')" href="#"> пользовательского соглашения </a>
          </div>
        </form>
      </div>
    </div>
    <img :class="b('coffee')" src="@/assets/images/mailing/cof.png" alt="coffee" data-aos="fade-left" data-aos-duration="1000">
  </section>
</template>

<script>
export default {
  name: "Mailing"
}
</script>

<style lang="scss" scoped>
.mailing {
  position: relative;
  background-image: url("@/assets/images/mailing/bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  &__inner {
    position: relative;
    z-index: 100;
    padding: 40px 0;
  }
  &__text {
    max-width: 760px;
    margin-bottom: 60px;
    line-height: 1.3;
    @media (max-width: 1024px) {
      font-size: 20px;
      margin-bottom: 40px;
    }
  }
  &__form {
    position: relative;
    max-width: 1100px;
  }
  &__input {
    background-color: #F3F3F3;
    border-radius: 40px;
    width: 100%;
    height: 80px;
    border: none;
    padding: 24px 60px;
    margin-bottom: 20px;
    &::placeholder {
      color: #C9C9C9;
    }
    @media (max-width: 800px) {
      font-size: 20px;
      height: 55px;
      padding: 10px 30px;
    }
  }
  &__button {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 260px;
    width: 100%;
    height: 80px;
    background-color: #F9B300;
    border-radius: 40px;
    padding: 25px;
    transition: 0.5s;
    @media (max-width: 800px) {
      font-size: 20px;
      max-width: 200px;
      height: 55px;
    }
    @media (max-width: 540px) {
      font-size: 18px;
      max-width: 150px;
      padding: 0;
    }
  }
  &__faq {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.3;
    color: #5B5B5B;
    max-width: 800px;
    &-link {
      color: #F9B300;
      font-weight: 600;
      transition: 0.5s;
    }
  }
  &__coffee {
    position: absolute;
    top: -80px;
    right: 0;
    max-width: 50%;
    @media (max-width: 1620px) {
      top: -10px;
      max-width: 35%;
    }
    @media (max-width: 1220px) {
      top: 0;
      max-width: 27%;
    }
    @media (max-width: 1024px) {
      display: none;
    }
  }
}

@media (hover: hover) {
  .mailing {
    &__button {
      &:hover {
        background-color: var(--hover-color-btn);
      }
    }
    &__faq {
      &-link {
        &:hover {
          color: var(--hover-color-btn);
        }
      }
    }
  }
}
</style>
