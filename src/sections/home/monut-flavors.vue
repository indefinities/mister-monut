<template>
  <section class="monut-flavors" id="menu">
    <monut-page>
      <h1>Weekly Flavors</h1>

      <div class="monut-flavors__section">

        <img src="/images/croffles/cover.jpg" alt="person dressing a kroffle"/>

        <div class="monut-flavors__title">
          <h2>🧇 Kroffles</h2>
          <p>
            What is a <strong>kroffle</strong>? <br>
            A <a href="https://en.wikipedia.org/wiki/Croffle" target="_blank">kroffle</a> is a hybrid between a croissant and a waffle which originated from South Korea.
          </p>
        </div>

        <div class="monut-flavors__flavors">
          <monut-card
              v-for="(croffle, index) in croffleFlavors" :key="index"
              :image="imageSrc('croffles', croffle.file)">

            <template #title>
              <h2>
                {{ croffle.name }}
              </h2>
            </template>

            <template #desc>
              <p>
                {{ croffle.desc }}
              </p>
            </template>

          </monut-card>
        </div>
      </div>


      <div class="monut-flavors__section">

        <img src="/images/monuts/cover.jpg" alt="monuts on display in-store"/>

        <div class="monut-flavors__title">
          <h2>🍩 Monuts</h2>
          <p>
            What is a <strong>mochi donut</strong>? <br>
            A <a href="https://en.wikipedia.org/wiki/Mochi_donuts" target="_blank">monut</a> is a fusion pastry crossing traditional American doughnuts and Japanese mochi
          </p>
        </div>

        <div class="monut-flavors__flavors">
          <monut-card
          v-for="(monut, index) in monutFlavors" :key="index"
          :image="imageSrc('monuts', monut.file)">
                  <template #title>
                    <h2>
                      {{ monut.name }}
                    </h2>
                  </template>

                  <template #desc>
                    <p>
                      {{ monut.desc }}
                    </p>
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
} from '../../data/flavors.js';

import {
  monutPage,
  monutCard,
} from '../../components/component-export.js'

export default {
  name: 'monut-flavors',
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
      return `/images/${folderName}/${fileName}.jpg`;
    }
  }
}
</script>

<style lang="scss" scoped>
.monut-flavors {
  &__section {
    margin: 10vh 0;

    img {
      margin: 1vh 0;
      width: 100%;
      border-radius: 10px;
    }
  }

  &__title {
    margin: 2vh 0;

    @media screen and (min-width: 768px) {
      width: 60%;
    }

    p {
      padding: 2vh 0;
    }
  }

  &__flavors {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }
}
</style>
