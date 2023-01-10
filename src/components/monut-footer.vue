<template>
  <div class="monut-footer">
    <p>mister monut © ️{{ getCurrentYear }}</p>
  </div>
</template>

<script>
export default {
  name: "monut-footer",
  computed: {
    /**
     * Gets the current year
     * @returns {number}
     */
    getCurrentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style lang="scss">
.monut-footer {
  text-align: center;
  width: 100vw;
}
</style>