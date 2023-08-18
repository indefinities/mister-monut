<template>
  <section id="menu" class="monut-flavors centered-section">
    <div class="centered-page">
      <h1>Weekly Flavors</h1>

      <div class="monut-flavors__section">

        <img src="/images/kroffles/cover.jpg" alt="person dressing a kroffle"/>

        <div class="monut-flavors__title">
          <h2>🧇 Kroffles</h2>
          <p>
            <em>What is a <strong>kroffle</strong>?</em> <br>
            A <a href="https://en.wikipedia.org/wiki/Croffle" target="_blank">kroffle</a> is a hybrid between a croissant and a waffle, originating from South Korea.
          </p>
        </div>

        <div class="monut-flavors__flavors">
          <monut-card
              v-for="(kroffle, index) in kroffleFlavors" :key="index"
              :image="imageSrc('kroffles', kroffle.file)">

            <template #title>
              <h2>
                {{ kroffle.name }}
              </h2>
            </template>

            <template #desc>
              <p>
                {{ kroffle.desc }}
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
            <em>What is a <strong>mochi donut</strong>?</em> <br>
            A <a href="https://en.wikipedia.org/wiki/Mochi_donuts" target="_blank">monut</a> is a pastry which combines the light fluffiness of an American donut with the chewiness of Japanese mochi into one delicious, satisfying pastry.
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
            <!--                  <template #desc>-->
            <!--                    <p>-->
            <!--                      {{ monut.desc }}-->
            <!--                    </p>-->
            <!--                  </template>-->
          </monut-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Client, Environment } from "square";

import {
  monutCard,
} from '../../components/component-export.js'
import { kroffleFlavors, monutFlavors } from "../../data/flavors.js";

export default {
  name: 'monut-flavors',
  components: {
    monutCard,
  },
  data() {
    return {
      kroffleFlavors,
      monutFlavors,
    }
  },
  methods: {
    imageSrc(folderName, fileName) {
      return `/images/${folderName}/${fileName}.jpg`;
    },
    /**
     * Makes an API call to retrieve all the menu items from Mister Monut Square
     * @param client
     * @returns {Promise<void>}
     */
    async fetchMenuItems(client) {
      try {
        const response = await client.catalogApi.listCatalog(undefined,
            'category,tax');
        // const response = await client.catalogApi.retrieveCatalogObject('W62UWFY35CWMYGVWK6TWJDNI');
        console.log(response.result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  },

  mounted() {
    const c = new Client({
      accessToken: import.meta.env.VUE_APP_SQUARE_ACCESS_TOKEN,
      environment: Environment.Sandbox,
    });

    this.fetchMenuItems(c);
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
