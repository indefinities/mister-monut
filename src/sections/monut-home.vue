<script setup>
import {
  monutNav,
  monutPage,
} from "../components/component-export.js";

</script>

<template>
  <section class="monut-home">
    <monut-nav />

    <monut-page class="monut-home__content">
      <div class="monut-home__logo">
        <img src="../assets/logo-img.svg" />
        <img src="../assets/logo-title.svg" />
      </div>

      <v-btn
      class="d-block mr-auto ml-auto mt-13 pt-4"
      variant="outlined"
      icon="mdi-instagram"
      size="x-large"
      href="https://www.instagram.com/mistermonut/"
      ></v-btn>

      <div class="monut-home__footer">
        <p><em>munch on a monut</em></p>
        <img 
        class="monut-home__footer__arrow" 
        src="../assets/arrow_drop_down.svg" />
      </div>
    </monut-page>

  </section>
</template>

<style lang="scss" scoped>
.monut-home {
  &__content {
    margin-top: 15vh;
  }

  &__logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 30vw;

    @media only screen and (max-width: 595px) {
      width: 300px;
    }

  }

  &__footer {
    margin-top: 5vh;
    text-align: center;

    &__arrow {
      position: absolute;
      left: calc(50% - 30px);
      animation: jump-infinite 1.5s infinite;

    &:after {
      position: absolute;
      top: 10px;
      left: -10px;
      transform: rotateZ(45deg);
    }
  }

    @keyframes jump-infinite {
    0% {
      margin-top: 0;
      opacity: 25%;
    }
    50% {
      margin-top: 20px;
      opacity: 100%;
    }
    100% {
      margin-top: 0;
      opacity: 25%;
    }
  }
  }
}
</style>
