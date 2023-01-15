<template>
  <section class="monut-info" id="info">
    <monut-page>
      <div class="monut-info__insta">
        <h1>📷 Instagram</h1>
        <instagram-embed />
      </div>

      <div>
        <h1>📍Location</h1>
        <div class="monut-info__address">
          <p>🏪 873 Main Street, Waltham, MA</p>
          <p>☎ (781) 893 - 1809</p>
        </div>

        <div class="monut-info__location">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.409400866995!2d-71.24825278386174!3d42.3764243420595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e383a1d724c8e9%3A0x4685ec9104fb2bcc!2sMister%20Monut%20Bakery%20%26%20Caf%C3%A9!5e0!3m2!1sen!2sus!4v1667664114712!5m2!1sen!2sus"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div class="monut-info__hours">
          <monut-store-sign />
        </div>
      </div>

    </monut-page>
  </section>
</template>

<script>
import {
  monutPage,
  instagramEmbed,
  monutStoreSign
} from "../components/component-export.js";

export default {
  name: 'monut-info',
  components: {
    monutStoreSign,
    monutPage, 
    instagramEmbed
  }
}
</script>

<style lang="scss">
.monut-info {
  &__insta {
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 10vh;
  }

  &__address {
    margin-left: 5vw;
  }

  &__location {
    margin: 5vh 0;

    iframe {
      width: 100%;
      height: 500px;
      border: 1px solid grey;
      border-radius: 10px;
    }
  }
}
</style>
