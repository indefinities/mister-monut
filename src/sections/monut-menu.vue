<template>
  <section class="monut-menu">
    <div class="monut-menu__header">
      <h1>Menu & Prices</h1>
    </div>

    <div class="monut-menu__container">
      <div v-for="(m, index) in menu" :key="index">
        <h2>{{ m.category }}</h2>

        <h3 v-if="m.category !== '🥤 Drinks'">FLAVORS</h3>
        <ul class="monut-menu__category" v-for="(item, i) in m.items" :key="i">
          <li class="monut-menu__category--item">
            <p>{{ item.name }}</p>
            <p>{{ item.price ? `$${item.price}` : item.price }}</p>
          </li>
        </ul>


        <h3 v-if="m.category !== '🥤 Drinks'">PRICES</h3>
        <ul class="monut-menu__category" v-for="(p, i) in m.pricing" :key="i">
          <li class="monut-menu__category--item">
            <p>{{ p.qty }}</p>
            <p>{{ p.price  ? `$${p.price}` : p.price }}</p>
          </li>
        </ul>

      </div>
    </div>

    <div class="monut-menu__button">
      <monut-button url="/images/menu.png">
        VIEW PRINT MENU
      </monut-button>
    </div>
  </section>
</template>

<script>
import {kroffleFlavors, monutFlavors} from "../data/flavors.js";
import beverages from "../data/beverages.js";
import monutButton from "../components/monut-button.vue";

export default {
  name: "monut-menu",
  components: {
    monutButton
  },
  data() {
    return {
      menu: [
        {
          category: '🧇 Kroffles',
          items: kroffleFlavors,
          pricing: [
            {
              qty: 'Buy 3 kroffles, get 10% off',
            },
            {
              qty: 'Buy 5 kroffles, get 15% off',
            },
          ]
        },
        {
          category: '🍩 Monuts',
          items: monutFlavors,
          pricing: [
            {
              qty: '1 Monut',
              price: 3.68,
            },
            {
              qty: '4 Monuts',
              price: 13.98,
            },
            {
              qty: '6 Monuts',
              price: 19.98,
            },
            {
              qty: '12 Monuts',
              price: 38.88,
            },
          ]
        },
        {
          category: '🥤 Drinks',
          items: beverages,
        }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.monut-menu {
  margin: 15vh 10vw;

  &__header {
    text-align: center;
  }

  &__container {
    width: 100%;
    margin: 5vh 0;
    display: inline-flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  &__category {
    width: 100%;
    padding: unset;
    list-style: none;

    @media screen and (min-width: 960px) {
      width: 25vw;
    }

    &--item {
      width: 100%;
      display: inline-flex;
      flex-flow: row nowrap;
      justify-content: space-between;
    }
  }

  &__button {
    display: flex;
    justify-content:center;
  }
}
</style>