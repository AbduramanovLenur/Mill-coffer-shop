<template>
  <div :class="b('')">
    <div :class="b('filter-text')">Сортировка:</div>
    <select :class="b('select')" @change="sortArray($event)">
      <option :class="b('option')" v-for="item in option" :value="item.value" :key="item.id"> {{ item.text }} </option>
    </select>
  </div>
</template>

<script>
import sort from '@/utils/sort.js';

export default {
  name: 'Sort',
  props: {
    product: {
      type: Array,
      default: () => []
    }
  },
  data: () => {
    return {
      option: [
        {id: 1, text: 'Все', value: 'all'},
        {id: 2, text: 'По возрастанию цены', value: 'lowPrice'},
        {id: 3, text: 'По убыванию цены', value: 'highPrice'},
        {id: 4, text: 'По рейтингу', value: 'rating'}
      ],
      sortTexts: ['all', 'lowPrice', 'highPrice', 'rating'],
    }
  },
  methods: {
    sortArray(event) {
      this.$emit('sorted', sort(event, this.product, this.sortTexts));
    }
  }
}
</script>

<style lang="scss" scoped>
.sort {
  margin-bottom: 70px;
  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }
  &__filter {
    &-text {
      font-size: 20px;
      font-weight: 500;
      line-height: 1.15;
      margin-bottom: 20px;
    }
  }
  &__select {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.16;
    padding: 20px 30px;
    width: 260px;
    height: 60px;
    background-color: #fff;
    color: #F9B300;
    box-shadow: 0px 0px 20px rgba(103, 103, 103, 0.25);
    border-radius: 5px;
    border: none;
  }
}
</style>
