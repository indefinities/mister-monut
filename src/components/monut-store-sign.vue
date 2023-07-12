<template>
  <div class="monut-store-sign">
    <h2>🕚 Hours of Operation</h2>
    <div class="monut-store-sign__hours">
      <p>Monday: CLOSED</p>
      <p>Tuesday: CLOSED</p>
      <p>Wednesday: 7:30AM - 7PM</p>
      <p>Thursday: 7:30AM - 7PM</p>
      <p>Friday: 7:30AM - 7PM</p>
      <p>Saturday: 7:30AM - 7PM</p>
      <p>Sunday: 8AM - 5PM</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "monut-store-sign"
}
</script>

<style lang="scss">
@import "../styles/_base";

.monut-store-sign {
  &__hours {
    margin-top: 5vh;
    text-align: center;
  }
}
</style>