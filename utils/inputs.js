const inputs = [
  {
    id: 1,
    placeholder: {
      ru: "Имя",
      en: "Name"
    },
    type: "text",
    required: true,
    key: 'name'
  },
  {
    id: 2,
    placeholder: {
      ru: "Страна",
      en: "Country"
    },
    type: "text",
    required: true,
    key: 'country'
  },
  {
    id: 3,
    placeholder: {
      ru: "Фамилия",
      en: "Surname"
    },
    type: "text",
    required: true,
    key: 'surname'
  },
  {
    id: 4,
    placeholder: {
      ru: "Город",
      en: "City"
    },
    type: "text",
    required: true,
    key: 'city'
  },
  {
    id: 5,
    placeholder: {
      ru: "Телефон",
      en: "Phone"
    },
    type: "text",
    required: true,
    key: 'phone'
  },
  {
    id: 6,
    placeholder: {
      ru: "Улица/Дом",
      en: "Street/House"
    },
    type: "text",
    required: true,
    key: 'streetHouse'
  },
  {
    id: 7,
    placeholder: {
      ru: "Email",
      en: "Email"
    },
    type: "email",
    required: true,
    key: 'email'
  },
  {
    id: 8,
    placeholder: {
      ru: "Почтовый индекс",
      en: "Postcode"
    },
    type: "number",
    required: true,
    key: 'postcode'
  },
  {
    id: 9,
    placeholder: {
      ru: "Название компании (необязательно)",
      en: "Company name (optional)"
    },
    type: "text",
    required: false,
    key: 'companyName'
  },
  {
    id: 10,
    placeholder: {
      ru: "Комментарий к заказу (необязательно)",
      en: "Order comment (optional)"
    },
    type: "text",
    required: false,
    key: 'orderComment'
  }
]

export default inputs;
