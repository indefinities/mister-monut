<script setup>
import { monutPage } from "../components/component-export.js";
</script>

<template>
  <section class="monut-info" id="info">
    <monut-page>
      <div class="monut-info__location">
        <span class="text-h3">Location</span>

        <div class="monut-info__location--content">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.409400866995!2d-71.24825278386174!3d42.3764243420595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e383a1d724c8e9%3A0x4685ec9104fb2bcc!2sMister%20Monut%20Bakery%20%26%20Caf%C3%A9!5e0!3m2!1sen!2sus!4v1667664114712!5m2!1sen!2sus"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <div class="monut-info__address">
            <p><strong>Address</strong></p>
            <p>873 Main Street</p>
            <p>Waltham, MA</p>
            <p>(781) 893 - 1809</p>
          </div>

        </div>
      </div>

      <div class="monut-info__hours">
        <p><strong>Hours of Operation</strong></p>
          <img src="../assets/store-sign.svg" />
      </div>
    </monut-page>
  </section>
</template>

<style lang="scss">
.monut-info {
  &__location {
    width: 100%;
    margin-top: 50px;

    iframe {
      width: 100%;
      height: 500px;
      margin: 30px 0;
      border: 1px solid grey;
      border-radius: 10px;
    }
  }
  &__hours {
    display: block;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    margin-top: 10vh;

    @media screen and (min-width: 480px) {
      width: 20vw;
    }
  }
}
</style>
