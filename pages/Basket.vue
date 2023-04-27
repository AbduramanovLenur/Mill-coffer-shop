<template>
  <main class="main">
    <BasketContent />
    <Mailing />
  </main>
</template>

<script>
export default {
  name: "Basket",
  middleware: ['auth']
}
</script>

<style lang="scss" scoped></style>
