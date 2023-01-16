<template>
    <div class="monut-page"
        data-aos="fade-down"
        data-aos-duration="1000">
        <slot />
    </div>
</template>

<style lang= "scss">
.monut-page {
    max-width: 980px;
    min-height: 100%;
    display: block;
    margin: 10vh auto;

  @media screen and (max-width: 480px) {
    margin: 10vh 1em;
  }
}
</style>