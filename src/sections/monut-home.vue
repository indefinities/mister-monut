<template>
  <section class="monut-home">
    <monut-page class="monut-home__content">
      <div class="monut-home__munch">
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
  background: no-repeat top/80% url('../assets/monut-logo.svg');

  @media screen and (min-width: 480px) {
    background: no-repeat top/45% url('../assets/monut-logo.svg');
  }

  //if on desktop, put background image at a fixed width
  @media screen and (min-width: 768px) {
    background: no-repeat top/500px url('../assets/monut-logo.svg');
  }

  &__content {
    margin-top: 15vh;
  }

  &__munch {
    padding-top: 60vh;
    text-align: center;

    &__arrow {
      position: absolute;
      left: calc(50% - 30px);
      animation: jump-infinite 1.5s infinite;

      &:after {
        position: absolute;
        left: -10px;
        transform: rotateZ(45deg);
      }
    }

    @keyframes jump-infinite {
      0% {
        padding-top: 0;
        opacity: 25%;
      }
      50% {
        padding-top: 20px;
        opacity: 100%;
      }
      100% {
        padding-top: 0;
        opacity: 25%;
      }
    }
  }
}
</style>
