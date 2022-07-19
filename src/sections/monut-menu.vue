<script setup>
import {
  monutPage,
} from '../components/component-export.js'

</script>

<template>
  <section class="monut-menu">
    <monut-page>
      <span class="text-h3">Weekly Flavors</span>

      <div class="mt-5 d-flex flex-wrap justify-space-between">
        <div class="monut-menu__flavor mb-5">
          <v-card tonal width="350">
            <img 
            class="monut-menu__flavor--img"
            src="../assets/croffle.png" />
            
                <v-card-title>
                  Plain
                </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Nibh nunc maecenas volutpat facilisis ullamcorper risus, id et venenatis. 
                </v-card-text>
          </v-card>
        </div>

        <div class="monut-menu__flavor mb-5">
          <v-card tonal width="350">
            <img 
            class="monut-menu__flavor--img"
            src="../assets/croffle.png" />
            
                <v-card-title>
                  Strawberry 🍓
                </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Nibh nunc maecenas volutpat facilisis ullamcorper risus, id et venenatis. 
                </v-card-text>
          </v-card>
        </div>


      <div class="monut-menu__flavor mb-5">
          <v-card tonal width="350">
            <img 
            class="monut-menu__flavor--img"
            src="../assets/croffle.png" />
            
                <v-card-title>
                  Matcha 🍓
                </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Nibh nunc maecenas volutpat facilisis ullamcorper risus, id et venenatis. 
              </v-card-text>
          </v-card>
      </div>

      </div>
    </monut-page>
  </section>
</template>

<style lang="scss" scoped>
.monut-menu {
  &__flavor {
    &--img {
      width: 100%;
    }
  }
}
</style>
