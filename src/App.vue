<script setup>
import {
  monutFooter,
  monutNav,
} from './components/component-export';
</script>

<template>
  <monut-nav />
    <router-view />
  <monut-footer />
</template>

<style lang="scss">
@import './styles/base.scss';
</style>
