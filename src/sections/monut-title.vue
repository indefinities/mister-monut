<template>
  <section class="monut-title" id="top" data-aos="fade-up">
    <div id="home-banner" />
    <img class="monut-title__logo" src="/images/logo-text.svg" alt="Mister Monut logo" />
    <h3 style="text-align: center; margin: 0">(New Ownership) Bakery, Cafe, and Bubble Tea</h3>
    <div class="monut-title__actions">
      <div>
        <monut-button url="https://peipeis-bakery.square.site/">
          🛍️ order online for pickup or delivery
        </monut-button>
        <!-- <monut-button url="https://mister-monut.square.site/s/gift-cards">
      🎁 purchase a gift card
    </monut-button> -->
        <!-- <monut-button url="https://forms.gle/TC9CfFfYv1j4aRxb9">
      catering request form
    </monut-button> -->
        <p>for catering, questions and asisstance, please email <a :href="`mailto:${email}`" target="_blank">{{ email
            }}</a></p>
      </div>

      <div>
        <monut-button route="/smithfield">
          check out our new smithfield location!
        </monut-button>
      </div>
    </div>

  </section>
</template>

<script lang="js">
import { monutButton } from '../components/component-export.js';
export default {
  name: "monut-title",
  components: {
    monutButton
  },
  data() {
    return {
      email: 'dengfengjiang77@gmail.com'
    }
  }
};
</script>

<style lang="scss">
@import "../styles/_base.scss";

.monut-title {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;

  #home-banner {
    width: 100%;
    height: 75vh;
    background: center / cover no-repeat url("/images/cover.jpeg");

    @media (max-width: 768px) {
      height: 50vh;
    }
  }

  &__logo {
    margin: 15px 5vw;
    width: 25vw;
  }

  .monut-button {
    margin: 1em;
  }

  p {
    margin: 1em;
    text-align: center;
  }

  &__actions {
    display: flex;
    flex-flow: row wrap-reverse;
    justify-content: center;
    gap: 15px;

    >div {
      width: 100%;

      @media (min-width: 768px) {
        width: 30vw;
      }
    }

    .monut-button {
      width: unset;
    }
  }
}
</style>
