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
          ></v-text-field>

          <v-text-field
            label="Subject"
            variant="outlined"
          ></v-text-field>

          <v-textarea
          outlined
          label="Message"
          value=""
        ></v-textarea>

        <v-btn size="large" color="black">
          Submit
        </v-btn>
    </monut-page>
  </section>
</template>

<style lang="scss" scoped>
.monut-contact-us {
  margin-top: 15vh;

}
</style>
