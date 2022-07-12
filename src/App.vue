<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import {
  monutHome,
  monutInfo,
  monutMenu,
} from './sections/sections-export.js'
</script>

<template>
  <monut-home />
  <monut-info />
  <monut-menu />
</template>

<style>
#app {
  font-family: Avenir, sans-serif;
}
</style>
