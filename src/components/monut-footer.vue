<template>
  <div class="monut-footer">
    <a href="mailto:nick@justkdog.com">📧 nick@justkdog.com</a>
    <p>🏪 873 Main Street, Waltham, MA</p>
    <a href="tel:781-893-1809">☎ (781) 893 - 1809</a>
    <p><em>mister monut</em> © {{ getCurrentYear }}</p>
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
  width: 100%;
  padding: 1vh 0;
  text-align: center;
  background-color: $monut-secondary-color;


  a, p {
    color: $monut-primary-color;
  }
}
</style>