<template>
  <section id="info" class="monut-info centered-page" data-aos="fade-up">
    <div class="centered-section">
        <div class="monut-info__location">
          <h1>📍Location</h1>
          <div class="monut-info__address">
            <p>🏪 873 Main Street, <br/>
              Waltham, MA</p>
            <a href="tel:781-893-1809">☎ (781) 893 - 1809</a>
          </div>

          <iframe
              allowfullscreen=""
              height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2084.1259884027945!2d-71.24903053033884!3d42.37664086546647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3833da28e8ffd%3A0xd46df49ff73fe1e2!2sMister%20Monut!5e0!3m2!1sen!2sus!4v1675310205985!5m2!1sen!2sus" style="border:0;"
              width="600" />
        </div>

        <div class="monut-info__hours">
          <monut-store-sign :schedule="sched"/>
        </div>

        <div class="monut-info__insta">
          <h1>📷 Instagram</h1>
          <instagram-embed/>
        </div>
      </div>
  </section>
</template>

<script lang="js">
import schedules from '../data/schedules.json';
import {instagramEmbed, monutStoreSign} from "../components/component-export.js";

export default {
  name: 'monut-info',
  components: {
    monutStoreSign,
    instagramEmbed,
  },
  data() {
    return {
      sched: schedules.waltham
    }
  }
}
</script>

<style lang="scss">
@import "../styles/base";

.monut-info {
  &__insta {
    width: 100%;
  }

  &__address {
    a {
      color: $monut-secondary-color;
    }
  }

  &__location {
    margin: 20vh 0;

    iframe {
      margin: 5vh 0;
      width: 100%;
      height: 500px;
      border: 1px solid grey;
      border-radius: 10px;
    }
  }

  &__hours {
    margin: 20vh 0;
  }
}
</style>
