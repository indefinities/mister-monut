<template>
  <section class="monut-home">
    <monut-title/>
    <monut-info/>
    <monut-flavors/>

    <div class="monut-home__button">
      <monut-button
          url="https://www.yelp.com/biz/mister-monut-bakery-and-café-waltham-2?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)">

        please leave a review on our <img class="monut-home__button--icon"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Yelp_Logo.svg/2560px-Yelp_Logo.svg.png" /> page!
      </monut-button>
    </div>
  </section>
</template>

<script>
import {
  monutFlavors,
  monutInfo,
  monutTitle
} from './home/monut-home-export.js';
import monutButton from "../components/monut-button.vue";

export default {
  name: "monut-home",
  components: {
    monutTitle,
    monutInfo,
    monutFlavors,
    monutButton,
  }
}
</script>

<style lang="scss" scoped>
.monut-home {

  &__button {
    margin: 5vh 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    &--icon {
      width: 64px;
    }
  }
}
</style>