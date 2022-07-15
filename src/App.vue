<template>
  <v-app>
    <v-main>
      <monut-home />
      <monut-info />
      <monut-menu />
      <monut-contact-us />
    </v-main>
  </v-app>
</template>

<script>
import {
  monutHome,
  monutInfo,
  monutMenu,
  monutContactUs,
} from './sections/sections-export'

export default {
  name: 'App',

  components: {
    monutHome,
    monutInfo,
    monutMenu,
    monutContactUs,
  },
}
</script>
