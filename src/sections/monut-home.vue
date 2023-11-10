<script setup>
import monutTitle from "./home/monut-title.vue";
import monutInfo from "./home/monut-info.vue";
import monutFlavors from "./home/monut-flavors.vue";
</script>

<template>
  <section class="monut-home">
    <monut-title />
    <monut-info />
    <monut-flavors />
  </section>
</template>

<style lang="scss">
.monut-home {
  overflow-x: hidden;
}
</style>