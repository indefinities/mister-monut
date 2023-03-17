<template>
  <section id="info" class="monut-info">
    <monut-page>
      <div class="monut-info__section">
        <h1>👨‍🍳 Who We Are</h1>
        <p class="monut-info__section--text">
          We are the first Asian-American bakery to appear in the city of Waltham. We make our monuts and kroffles fresh
          daily.
        </p>
      </div>

      <div class="monut-info__section">
        <h3>Serving the Waltham Community
          from Wednesday 👉 Sunday 🏃💨</h3>

        <div class="monut-info__gallery">
          <img v-for="n in 3"
               :key="n"
               :src="`/images/opening-${n}.jpg`"
               class="monut-info__gallery--image"/>
        </div>
      </div>

      <div class="monut-info__section">
        <h1>📷 Instagram</h1>
        <instagram-embed/>
      </div>

      <div>
        <h1>📍Location</h1>
        <div class="monut-info__address">
          <p>🏪 873 Main Street, Waltham, MA</p>
          <a href="tel:781-893-1809">☎ (781) 893 - 1809</a>
        </div>

        <div class="monut-info__location">
          <iframe
              allowfullscreen=""
              height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.4110981418917!2d-71.24822848368618!3d42.37638817918571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3833da28e8ffd%3A0xd46df49ff73fe1e2!2sMister%20Monut!5e0!3m2!1sen!2sus!4v1678901540482!5m2!1sen!2sus" style="border:0;"
              width="600"></iframe>
        </div>

        <div class="monut-info__hours">
          <monut-store-sign/>
        </div>
      </div>

    </monut-page>
  </section>
</template>

<script>
import {instagramEmbed, monutPage, monutStoreSign} from "../../components/component-export.js";

export default {
  name: 'monut-info',
  components: {
    monutStoreSign,
    monutPage,
    instagramEmbed
  },
}
</script>

<style lang="scss">
@import "../../styles/base";

.monut-info {
  &__section {
    margin-bottom: 5vh;
    width: 100%;

    &--text {
      margin: 5% 0;
    }
  }

  &__address {
    margin-left: 5vw;

    a {
      color: $monut-secondary-color;
    }
  }

  &__location {
    margin: 5vh 0;

    iframe {
      width: 100%;
      height: 500px;
      border-radius: 10px;
    }
  }

  &__hours {
    margin-top: 10vh;
  }

  &__gallery {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    &--image {
      width: 100%;
      height: 300px;
      object-fit: cover;
      margin: 3% 0;
      border-radius: 10px;

      @media screen and (min-width: 768px) {
        width: 30%;
      }
    }
  }
}
</style>
