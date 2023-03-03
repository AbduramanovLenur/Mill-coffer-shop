<template>
  <ul :class="b('')">
    <li :class="b('item')" v-show="getIsActive('first-tab')">
      <div :class="b('box')">
        Text 1
      </div>
    </li>
    <li :class="b('item')" v-show="getIsActive('two-tab')">
      <TabNews />
    </li>
    <li :class="b('item')" v-show="getIsActive('three-tab')">
      <Faq />
    </li>
  </ul>
</template>

<script>
export default {
  name: "TabsContent",
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

<style lang="scss" scoped>
</style>
