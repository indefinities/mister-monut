<template>
  <section class="monut-menu" id="menu">
    <monut-page>
      <span class="text-h3">Weekly Flavors</span>

      <h2>Monuts</h2>

      <div 
      class="d-flex flex-wrap justify-start"
      >
        <div 
        class="monut-menu__flavor ma-5"
        v-for="(monut, index) in monutFlavors" :key="index">
          <v-card tonal :width="cardWidth">
            <img 
            class="monut-menu__flavor--img"
            :src="imageSrc('monut-flavors', monut.file)" />
            
                <v-card-title>
                  {{ monut.name }}
                </v-card-title>
                <v-card-text>
                  {{ monut.desc }}
                </v-card-text>
          </v-card>
        </div>

        

      </div>


      <h2>Croffles</h2>
      <div 
      class="d-flex flex-wrap justify-start"
      >
          <div 
          class="monut-menu__flavor ma-5"
          v-for="(croffle, index) in croffleFlavors" :key="index">
            <v-card tonal :width="cardWidth">
              <img 
              class="monut-menu__flavor--img"
              :src="imageSrc('croffle-flavors', croffle.file)" />
              
                  <v-card-title>
                    {{ croffle.name }}
                  </v-card-title>
                  <v-card-text>
                    {{ croffle.desc }}
                  </v-card-text>
            </v-card>
          </div>
        </div>
    </monut-page>
  </section>
</template>

<script>
import { croffleFlavors, monutFlavors } from '../data/flavors';

import {
  monutPage,
} from '../components/component-export.js'


export default {
  name: 'monut-menu',
  components: {
    monutPage
  },
  data() {
    return {
      cardWidth: 350,
      croffleFlavors,
      monutFlavors,
    }
  },
  methods: {
    imageSrc(folder, fileName) {
      return new URL(`../assets/` + folder + `/` + fileName + `.jpg`, import.meta.url).href
    }
  }
}
</script>

<style lang="scss" scoped>
.monut-menu {
  &__flavor {
    margin-top: 20vh;
    &--img {
      width: 100%;
    }
  }
}
</style>
