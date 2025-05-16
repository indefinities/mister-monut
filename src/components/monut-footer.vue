<template>
  <div class="monut-footer">
    <a href="mailto:dengfengjiang77@gmail.com">📧 dengfengjiang77@gmail.com</a>
    <p>873 Main Street, Waltham, MA</p>
    <a href="tel:+17818931809">☎ +1 (781) 893 - 1809</a>
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