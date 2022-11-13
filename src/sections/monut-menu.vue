<template>
  <section class="monut-menu" id="menu">
    <monut-page>
      <span class="text-h3">Weekly Flavors</span>

      <div class="mt-10">
        <h2>🍩 Monuts</h2>

        <div 
        class="d-flex flex-wrap justify-start align-start"
        >
          <div 
          class="monut-menu__flavor"
          v-for="(monut, index) in monutFlavors" :key="index">
            <v-card tonal :width="cardWidth">
              <img 
              class="monut-menu__flavor--img"
              :src="imageSrc('monuts', monut.file)" />
              
                  <v-card-title>
                    {{ monut.name }}
                  </v-card-title>
                  <v-card-text>
                    {{ monut.desc }}
                  </v-card-text>
            </v-card>
          </div>
        </div>
      </div>



  <div class="mt-10">
    <h2>🧇 Croffles</h2>
      <div 
      class="d-flex flex-wrap justify-start align-start"
      >
          <div 
          class="monut-menu__flavor"
          v-for="(croffle, index) in croffleFlavors" :key="index">
            <v-card tonal :width="cardWidth">
              <img 
              class="monut-menu__flavor--img"
              :src="imageSrc('croffles', croffle.file)" />
              
                  <v-card-title>
                    {{ croffle.name }}
                  </v-card-title>
                  <v-card-text>
                    {{ croffle.desc }}
                  </v-card-text>
            </v-card>
          </div>
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
      cardWidth: 300,
      croffleFlavors,
      monutFlavors,
    }
  },
  methods: {
    imageSrc(folderName, fileName) {
      return new URL(`../../public/images/` + folderName + `/` + fileName + `.jpg`, import.meta.url).href
    }
  }
}
</script>

<style lang="scss" scoped>
.monut-menu {
  &__flavor {
    margin: 5px;

    @media screen and (max-width: 480px) {
      width: 100%;
    }

    &--img {
      width: 100%;
    }
  }
}
</style>
