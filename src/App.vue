<template>

      <monut-home />
      <monut-info />
      <monut-menu />
      <monut-contact-us />

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

<style lang="scss">
@import './styles/base.scss';
</style>
