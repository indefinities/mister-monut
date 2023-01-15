<template>
  <div class="monut-footer">
    <p>mister monut © {{ getCurrentYear }}</p>
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
@import "../styles/_base";

.monut-footer {
  text-align: center;
  background-color: $monut-secondary-color;
  width: 100vw;
  padding: 2vh 0;

  p {
    color: $monut-primary-color;
  }
}
</style>