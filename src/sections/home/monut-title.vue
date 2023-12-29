<template>
  <section class="monut-title" id="top" data-aos="fade-up">
    <div id="home-banner"/>
    <img src="/images/logo-text.svg" alt="Mister Monut logo"/>
    <monut-button url="https://mister-monut.square.site/">
      🛍️ order online using square
    </monut-button>
    <monut-button url="https://mister-monut.square.site/s/gift-cards">
      🎁 purchase a gift card
    </monut-button>
    <monut-button url="https://forms.gle/TC9CfFfYv1j4aRxb9">
      catering request form
    </monut-button>
    <p>
      <em>you will receive a 10% Visa gift card for any orders $150+!</em>
    </p>
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
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;

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

  .monut-button {
    margin: 1em;
  }

  p {
    margin: 1em;
    text-align: center;
  }
}
</style>
