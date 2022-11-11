<script setup>
import monutPage from "../components/monut-page.vue";

</script>

<template>
  <section class="monut-contact-us">
    <monut-page>
        <span class="text-h3 mb-5">Contact Us</span>
        <v-text-field
          class="mt-5"
            label="Email"
            variant="outlined"
            prepend-inner-icon="mdi-at"
            bg-color="white"
          />

          <v-text-field
            label="Subject"
            variant="outlined"
            prepend-inner-icon="mdi-email-send"
            bg-color="white"
          />

          <v-textarea
          variant="outlined"
          label="Message"
          bg-color="white"
          counter
          :value="message"
        />

        <v-btn size="large" color="black">
          Submit
        </v-btn>
    </monut-page>
  </section>
</template>

<script>
export default {
  name: 'monut-contact-us',
  data() {
    return {
      message: ""
    }
  },
}
</script>

<style lang="scss" scoped>
.monut-contact-us {
  margin-top: 15vh;

}
</style>
