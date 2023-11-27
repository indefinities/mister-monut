<template>
  <section class="monut-title" id="top" data-aos="fade-up">
    <div id="home-banner"/>
    <img src="/images/logo-text.svg" alt="Mister Monut logo"/>
    <monut-button url="https://mister-monut.square.site/">
      🚙💨 ORDER ONLINE USING SQUARE
    </monut-button>
<!--      </div>-->
  </section>
</template>

<script lang="js">
import { monutButton } from '../../components/component-export.js';
export default {
  name: "monut-title",
  components: {
    monutButton
  }
};
</script>

<style lang="scss">
@import "../../styles/_base.scss";

.monut-title {
  padding: 6vh 0;
//linear-gradient(0deg, $monut-primary-color 0%, rgba(255,229,217,0.2) 50%, rgba(255,229,217,0.4) 80%, rgba(255,229,217,0.6) 90%, $monut-primary-color 100%)
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  background-color: $monut-secondary-color;

  #home-banner {
    width: 100%;
    height: 65vh;
    background: center / cover no-repeat url("/images/cover.jpg");

    @media (max-width: 768px) {
      height: 50vh;
    }
  }

  img {
    margin: 0 5vw;

    @media (min-width: 768px) {
      width: 25vw;
      min-width: 375px;
    }
  }
}
</style>
