<template>
  <div class="monut-footer">
    <a href="mailto:tau@mistermonut.com">📧 tau@mistermonut.com</a>
    <p>1201 Douglas Pike, Smithfield, RI 02917</p>
    <a href="tel:+14012310202">☎ +1 (401) 231 - 0202</a>
    <p>mister monut © 2025</p>
  </div>
</template>

<script>
export default {
  name: "monut-footer",
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
    width: 100%;
    color: $monut-primary-color;
  }
}
</style>