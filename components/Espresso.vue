<template>
  <div :class="b('')">
    <h2 :class="b('title instruction__title instruction--two-title')">
      {{ $t('instructionTitle6') }}
    </h2>
    <p :class="b('text instruction__text')" v-html="$t('intstructionText1')"></p>
    <div :class="b('picture instruction__picture margin--60')">
      <img src="@/assets/images/instruction/instruction-1.jpg" alt="instruction">
    </div>
    <h3 :class="b('name-title instruction__name-title')">
      {{ $t('instructionTitle3') }}
    </h3>
    <p :class="b('text instruction__text')" v-html="$t('intstructionText1')"></p>
    <div :class="b('picture instruction__picture margin--60')">
      <img src="@/assets/images/instruction/instruction-2.jpg" alt="instruction">
    </div>
    <h3 :class="b('name-title instruction__name-title')">
      {{ $t('instructionTitle3') }}
    </h3>
    <p :class="b('text instruction__text')" v-html="$t('intstructionText1')"></p>
    <div :class="b('picture instruction__picture')">
      <img src="@/assets/images/instruction/instruction-3.jpg" alt="instruction">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Espresso'
}
</script>

<style lang="scss" scoped></style>
