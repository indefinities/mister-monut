<template>
    <monut-nav :is-mobile="isMobile" />
    <router-view />
    <monut-footer />
</template>

<script lang="js">
import {
  monutFooter,
  monutNav,
} from './components/component-export';

export default {
  components: {
    monutNav,
    monutFooter
  },
  computed: {
    isMobile() {
      return window.innerWidth < 768;
    }
  }
}
</script>

<style lang="scss">
@import './styles/base.scss';
</style>
