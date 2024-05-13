<template>
  <section id="menu" class="monut-flavors" data-aos="fade-up">
    <div class="centered-page">

      <div id="cookie-cover">
        <img src="https://media.tenor.com/h8wC3_J4yh8AAAAi/new-post.gif"/>
      </div>



      <div class="monut-flavors__section centered-section">
        <div class="monut-flavors__title">
          <h2>🍪 Mochi Cookies</h2>
            <h3> in collaboration with <img style="height: 30px;" src="/images/chewco.svg"/></h3>
        </div>
      </div>

      <div class="monut-flavors__flavors">
        <monut-card
            v-for="(c, index) in cookies" :key="index"
            :image="imageSrc('cookies', c.file)">
          <template #title>
            <p>
              {{ c.name }}
            </p>
          </template>
        </monut-card>
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
            <p>
              {{ m.name }}
            </p>
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
            <p>{{ k.name }}</p>
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
      cookies: [
        {
          name: 'Plain',
          file: 'plain'
        },
        {
          name: 'Almond Delight',
          file: 'almond'
        },
        {
          name: 'Chocolate Chunk',
          file: 'chocolate'
        },
        {
          name: 'Coconut Paradise',
          file: 'coconut'
        },
        {
          name: 'Matcha Pistachio',
          file: 'matcha'
        },
        {
          name: 'Oatmeal Raisin',
          file: 'oatmeal'
        },
        {
          name: 'Strawberry Shortcake',
          file: 'strawberry'
        },
      ],
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

  #cookie-cover {
    @include cover-img("/images/cookies/cover.jpg");

    img {
      height: 20%;
      position: relative;
      top: -5vh;
      transform: rotate(-10deg);
      border-radius: 25px;
      background-color: lightpink;

      @media (min-width: 768px) {
        left: 15vw;
      }
    }
  }

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
    margin: 15vh 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
}
</style>
