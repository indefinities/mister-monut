<template>
  <section id="menu" class="monut-flavors">
    <div class="centered-page">
      <div>
        <h1>Weekly Flavors</h1>
        <p><strong>*our flavors rotate weekly</strong></p>
        <br/>
      </div>

      <div id="monut-cover"/>
      <div class="monut-flavors__section centered-section">
        <div class="monut-flavors__title">
          <h2>🍩 Monuts</h2>
          <p>
            <em>What is a <strong>mochi donut</strong>?</em> <br>
            A <a href="https://en.wikipedia.org/wiki/Mochi_donuts" target="_blank">monut</a> is a pastry which combines the light fluffiness of an American donut with the chewiness of Japanese mochi into one delicious, satisfying pastry.
          </p>
        </div>
      </div>

      <div class="monut-flavors__flavors">
        <monut-card
            v-for="(m, index) in monuts" :key="index"
            :image="imageSrc('monuts', m.file)">
          <template #title>
            <h2>
              {{ m.name }}
            </h2>
          </template>
        </monut-card>
      </div>

      <div id="kroffle-cover"/>

      <div class="monut-flavors__section centered-section">
        <div class="monut-flavors__title">
          <h2>🧇 Kroffles</h2>
          <p>
            <em>What is a <strong>kroffle</strong>?</em> <br>
            A <a href="https://en.wikipedia.org/wiki/Croffle" target="_blank">kroffle</a> is a hybrid between a croissant and a waffle, originating from South Korea.
          </p>
        </div>
      </div>

      <div class="monut-flavors__flavors">
        <monut-card
            v-for="(k, index) in kroffles" :key="index"
            :image="imageSrc('kroffles', k.file)">
          <template #title>
            <h2>{{ k.name }}</h2>
          </template>
        </monut-card>
      </div>
    </div>
  </section>
</template>

<script>
import { Client, Environment } from "square";

import {
  monutCard,
} from '../../components/component-export.js'

export default {
  name: 'monut-flavors',
  components: {
    monutCard,
  },
  data() {
    return {
      kroffles: [
        {
          name: 'Banana Nutella',
          file: 'banana-nutella',
        },
        {
          name: 'Biscoff Cream',
          file: 'biscoff-cream',
        },
        {
          name: 'Blueberry Cream Cheese',
          file: 'blueberry',
        },
        {
          name: 'Mixed Fruits',
          file: 'colorful-fruits',
        },
        {
          name: 'Oreo Cream',
          file: 'oreo',
        },
        {
          name: 'Strawberry Cream',
          file: 'strawberry-cream',
        },
      ],
      monuts: [
        {
          name: "Caramel Cookie",
          file:"caramel-cookie",
        },
        {
          name: "Cinnamon Sugar",
          file:"cinnamon-sugar"
        },
        {
          name: "Cookies n Cream",
          file:"cookies-n-cream"
        },
        {
          name: "Fruity Pebbles",
          file:"fruity-pebbles"
        },
        {
          name: "Matcha",
          file: "matcha"
        },
        {
          name: "Taro Coconut",
          file:"taro-coconut"
        },
      ]
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
    // const c = new Client({
    //   accessToken: import.meta.env.VUE_APP_SQUARE_ACCESS_TOKEN,
    //   environment: Environment.Sandbox,
    // });
    // this.fetchMenuItems(c);
  }
}
</script>

<style lang="scss">
@import "../../styles/_base.scss";

.monut-flavors {
  margin-top: 35vh;
  width: 100%;

  #kroffle-cover {
    @include cover-img("/images/kroffles/cover.jpg");
  }

  #monut-cover {
    @include cover-img("/images/monuts/cover.jpg");
  }

  h1 {
    margin: 3vh 0;
  }

  &__title {
    margin: 2vh 0;

    p {
      padding: 2vh 0;
    }
  }

  &__flavors {
    margin: 0 5vw 25vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }
}
</style>
