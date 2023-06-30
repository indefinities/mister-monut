<template>
  <section class="monut-title">
      <div class="monut-title__subtitle">
        <p><em>munch on a monut</em></p>
        <div
            class="monut-title__footer__arrow">
          <svg fill="none" height="48" width="48" xmlns="http://www.w3.org/2000/svg">
            <path d="m14 20 10 10 10-10H14Z" fill="#323232"/>
          </svg>
        </div>
      </div>
  </section>
</template>

<script lang="js">
export default {
  name: "monut-title",
};
</script>

<style lang="scss">
@import "../../styles/_base.scss";

.monut-title {
  height: 70vh;
  margin-top: 10vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-end;
  align-content: flex-end;
  background: top / 375px no-repeat url("/images/logo.svg");

  &__subtitle {
    width: 100%;
    text-align: center;
    display: inline-flex;
    flex-flow: column wrap;
    justify-content: flex-end;
    align-content: center;


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
