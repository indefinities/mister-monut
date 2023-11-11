<template>
  <section class="monut-title" data-aos="fade-up">

    <img src="/images/logo.svg"/>

      <div class="monut-title__actions">
        <monut-button url="https://mister-monut.square.site/">
          🚙💨 ORDER ONLINE USING SQUARE
        </monut-button>
      </div>
      <div class="monut-title__subtitle">
        <p><em>munch on a monut</em></p>

<!--        <div-->
<!--            class="monut-title__footer__arrow">-->
<!--          <svg fill="none" height="48" width="48" xmlns="http://www.w3.org/2000/svg">-->
<!--            <path d="m14 20 10 10 10-10H14Z" fill="#323232"/>-->
<!--          </svg>-->
<!--        </div>-->
      </div>
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
  background: linear-gradient(0deg, $monut-primary-color 0%, rgba(255,229,217,0.3) 50%, rgba(255,229,217,0.3) 100%),
      center / cover no-repeat url("/images/cover.jpg");
  height: 95vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-end;
  align-items: center;

  &__subtitle {
    width: 100%;
    text-align: center;
    display: inline-flex;
    flex-flow: column wrap;
    justify-content: flex-end;
    align-items: center;


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

  &__actions {
    margin: 3vh 0;
    width: 100%;
    display: inline-flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }

  img {
    margin: inherit 1em;

    @media (min-width: 768px) {
      margin-top: 5vh;
      width: 45vw;
      max-width: 500px;
    }
  }
}
</style>
