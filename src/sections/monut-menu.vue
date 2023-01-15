<template>
  <section class="monut-menu" id="menu">
    <monut-page>
      <h1>Weekly Flavors</h1>

      <div>
        <h2>🍩 Monuts</h2>

        <div class="monut-menu__flavors">
          <monut-card
          class="monut-menu__flavor"
          v-for="(monut, index) in monutFlavors" :key="index"
          :image="imageSrc('monuts', monut.file)">

                  <template #title>
                    {{ monut.name }}
                  </template>

                  <template #desc>
                      {{ monut.desc }}
                  </template>

          </monut-card>
        </div>
      </div>



  <div class="mt-10">
    <h2>🧇 Croffles</h2>

      <div class="monut-menu__flavors">
          <monut-card
          class="monut-menu__flavor"
          v-for="(croffle, index) in croffleFlavors" :key="index"
          :image="imageSrc('croffles', croffle.file)">
              
                <template #title>
                  {{ croffle.name }}
                </template>

                <template #desc>
                  {{ croffle.desc }}
                </template>

          </monut-card>
        </div>
  </div>
      
    </monut-page>
  </section>
</template>

<script>
import {
  croffleFlavors,
  monutFlavors
} from '../data/flavors';

import {
  monutPage,
  monutCard,
} from '../components/component-export.js'


export default {
  name: 'monut-menu',
  components: {
    monutCard,
    monutPage
  },
  data() {
    return {
      croffleFlavors,
      monutFlavors,
    }
  },
  methods: {
    imageSrc(folderName, fileName) {
      return new URL(`/images/${folderName}/${fileName}.jpg`, import.meta.url).href
    }
  }
}
</script>

<style lang="scss" scoped>
.monut-menu {
  &__flavors {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }

  &__flavor {
    margin-top: 1vh;

    @media screen and (max-width: 480px) {
      width: 100%;
    }

    &--img {
      width: 100%;
    }
  }
}
</style>
