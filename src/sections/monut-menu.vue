<template>
  <section class="monut-menu" id="menu">
    <monut-page>
      <span class="text-h3">Weekly Flavors</span>

      <div class="mt-10">
        <h2>🍩 Monuts</h2>

        <div>
          <div 
          class="monut-menu__flavor"
          v-for="(monut, index) in monutFlavors" :key="index">
              <img 
              class="monut-menu__flavor--img"
              :src="imageSrc('monuts', monut.file)" />
              
                  <h3>{{ monut.name }}</h3>
                  <span>
                    <p>
                      {{ monut.desc }}
                    </p>
                  </span>
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
              <img 
              class="monut-menu__flavor--img"
              :src="imageSrc('croffles', croffle.file)" />
              
                  <h3>{{ croffle.name }}</h3>
                  <span>
                    <p>
                      {{ croffle.desc }}
                    </p>
                  </span>
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
      return new URL(`../../public/images/${folderName}/${fileName}.jpg`, import.meta.url).href
    }
  }
}
</script>

<style lang="scss" scoped>
.monut-menu {
  &__flavor {
    width: 375px;
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
