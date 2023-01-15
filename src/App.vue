<script setup>
import {
  monutFooter,
  monutNav,
} from './components/component-export';

import {
  monutHome,
  monutInfo,
  monutMenu,
} from './sections/sections-export';

</script>

<template>
  <monut-nav :is-mobile="isMobile" />
  <monut-home />
  <monut-info />
  <monut-menu />
  <monut-footer />
</template>

<style lang="scss">
@import './styles/base.scss';
</style>
