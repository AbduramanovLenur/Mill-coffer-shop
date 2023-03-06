<template>
  <ul :class="b('')">
    <li :class="b('item')" v-show="getIsActive('first-tab')">
      <ContactInfo />
    </li>
    <li :class="b('item')" v-show="getIsActive('two-tab')">
      <ContactShop />
    </li>
  </ul>
</template>

<script>
export default {
  name: "ContactContentTab",
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
