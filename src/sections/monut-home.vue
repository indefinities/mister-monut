<template>
  <section class="monut-home">
    <monut-page class="monut-home__content">
      <div class="monut-home__logo">
        <img src="../assets/logo-img.svg" />
        <img src="../assets/logo-title.svg" />
      </div>

      <div class="monut-home__footer">
        <p><em>munch on a monut</em></p>
        <img
          class="monut-home__footer__arrow"
          src="../assets/arrow_drop_down.svg"
        />
      </div>
    </monut-page>
  </section>
</template>

<script>
import { monutPage } from "../components/component-export.js";

export default {
  name: "monut-home",
  components: {
    monutPage,
  },
  data() {
    return {
      isMobile: false,
    }
  },
  beforeMount() {
    const breakpoint = window.matchMedia("( max-width: 710px )");
    this.addQuery(breakpoint, (mq) => {
      this.isMobile = mq.matches;
    });
  },
  methods: {
    addQuery(mq, callback) {
      callback(mq);
      mq.addListener(callback);
    },
  },
};
</script>

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
