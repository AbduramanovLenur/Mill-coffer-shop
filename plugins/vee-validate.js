import Vue from 'vue';
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import { required, email, min, confirmed, is, length } from "vee-validate/dist/rules.js";

import { localize } from 'vee-validate';

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

localize({
  ru: {
    messages: {
      required: 'Это поле обязательно к заполнению',
      email: 'Поле должно быть действительным электронным адресом',
      min: 'Слишком короткий текст'
    },
  },
  en: {
    messages: {
      required: 'This field is required',
      email: 'The field must be a valid email address',
      min: 'Too short text'
    },
  },
});

extend('required', {
  ...required,
  // message: 'Обязательно к заполнению'
})

extend('email', {
  ...email,
  // message: 'Укажите валидный email'
})

extend('min', {
  ...min,
  // message: 'Минимальная длина {length} символа'
})

// extend('confirmed', {
//   ...confirmed,
//   message: 'Оба поля должны совпадать'
// })

// extend('is', {
//   ...is,
//   message: 'is {other}'
// })

// extend('length', {
//   ...length,
//   message: 'length'
// })
