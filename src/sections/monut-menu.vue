<script setup>
import {
  monutPage,
} from '../components/component-export.js'

</script>

<template>
  <section class="monut-menu">
    <monut-page>
      <h1>Weekly Flavors</h1>
      <div class="monut-menu__flavor">
        <v-card tonal width="350">
          <v-card-text>
              <v-card-title>
                Strawberry 🍓
              </v-card-title>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nibh nunc maecenas volutpat facilisis ullamcorper risus, id et venenatis. 
              </p>
          </v-card-text>
        </v-card>

      </div>
    </monut-page>
  </section>
</template>

<style lang="scss" scoped>
.monut-menu {
  &__flavor {
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>
