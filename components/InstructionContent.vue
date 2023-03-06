<template>
  <ul :class="b('')">
    <li :class="b('item')" v-show="getIsActive('instruction-1')">
      <Turk />
    </li>
    <li :class="b('item')" v-show="getIsActive('instruction-2')">
      <FrenchPress />
    </li>
    <li :class="b('item')" v-show="getIsActive('instruction-3')">
      <Moka />
    </li>
    <li :class="b('item')" v-show="getIsActive('instruction-4')">
      <Espresso />
    </li>
    <li :class="b('item')" v-show="getIsActive('instruction-5')">
      <Funnel />
    </li>
    <li :class="b('item')" v-show="getIsActive('instruction-6')">
      <Aeropress />
    </li>
    <li :class="b('item')" v-show="getIsActive('instruction-7')">
      <Cup />
    </li>
    <li :class="b('item')" v-show="getIsActive('instruction-8')">
      <Machine />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'InstructionContent',
  props: {
    isActiveTab: {
      type: String,
      default: () => ''
    }
  },
  methods: {
    getIsActive(tab) {
      return this.isActiveTab === tab;
    }
  }
}
</script>

<style lang="scss" scoped></style>
