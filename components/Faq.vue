<template>
  <div :class="b('')">
    <h2 :class="b('title')">
      {{ $t('faqTitle') }}
    </h2>
    <ul :class="b('list')">
      <FaqItem
        v-for="faq in faqs"
        :faq="faq"
        :open="faq.open"
        :key="faq.id"
        @toggleOpen="toggleOpen"
        />
    </ul>
  </div>
</template>

<script>
export default {
  name: "Faq",
  data: () => {
    return {
      faqs: [
        {
          id: 1,
          question: {
            ru: 'Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?',
            en: 'How are you different from competitors? Why should I choose you?'
          },
          answer: {
            ru: 'Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития',
            en: 'The task of the organization, in particular the framework and place of training of personnel, contributes to the preparation and implementation of systems of mass participation. Thus, the strengthening and development of the structure contributes to the preparation and implementation of the directions of progressive development'
          },
          open: false
        },
        {
          id: 2,
          question: {
            ru: 'Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?',
            en: 'How are you different from competitors? Why should I choose you?'
          },
          answer: {
            ru: 'Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития',
            en: 'The task of the organization, in particular the framework and place of training of personnel, contributes to the preparation and implementation of systems of mass participation. Thus, the strengthening and development of the structure contributes to the preparation and implementation of the directions of progressive development'
          },
          open: false
        },
        {
          id: 3,
          question: {
            ru: 'Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?',
            en: 'How are you different from competitors? Why should I choose you?'
          },
          answer: {
            ru: 'Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития',
            en: 'The task of the organization, in particular the framework and place of training of personnel, contributes to the preparation and implementation of systems of mass participation. Thus, the strengthening and development of the structure contributes to the preparation and implementation of the directions of progressive development'
          },
          open: false
        },
        {
          id: 4,
          question: {
            ru: 'Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?',
            en: 'How are you different from competitors? Why should I choose you?'
          },
          answer: {
            ru: 'Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития',
            en: 'The task of the organization, in particular the framework and place of training of personnel, contributes to the preparation and implementation of systems of mass participation. Thus, the strengthening and development of the structure contributes to the preparation and implementation of the directions of progressive development'
          },
          open: false
        },
        {
          id: 5,
          question: {
            ru: 'Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?',
            en: 'How are you different from competitors? Why should I choose you?'
          },
          answer: {
            ru: 'Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития',
            en: 'The task of the organization, in particular the framework and place of training of personnel, contributes to the preparation and implementation of systems of mass participation. Thus, the strengthening and development of the structure contributes to the preparation and implementation of the directions of progressive development'
          },
          open: false
        }
      ]
    }
  },
  methods: {
    toggleOpen(index) {
      this.faqs = this.faqs.map(item => {
        if (index === item.id) {
          item.open = !item.open;
        } else {
          item.open = false;
        }

        return item;
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.faq {
  background-image: url('@/assets/images/accordion/coffee.png');
  background-repeat: no-repeat;
  background-position: left;
  @media (max-width: 1024px) {
    background-image: none;
  }
  &__title {
    font-size: 40px;
    font-weight: 900;
    line-height: 1.25;
    max-width: 350px;
    margin-bottom: 55px;
    @media (max-width: 800px) {
      margin-bottom: 30px;
    }
    @media (max-width: 640px) {
      font-size: 30px;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 30px;
    @media (max-width: 800px) {
      gap: 20px;
    }
  }
}
</style>
