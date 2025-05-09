<template>
  <nav class="monut-nav">
    <!--      scroll to top button-->
    <div class="monut-nav__up" @click="scrollToSection('top')" />

    <nav v-if="isMobile" class="monut-nav__bar">
      <div :class="{
        'monut-nav__bar--menu': true,
        'monut-nav__bar--menu--active': openMenu
      }" @click="drawerActions()" aria-label="The hamburger menu button.">
        <div v-for="index in (openMenu ? 2 : 3)" :key="index" class="monut-nav__bar--menu--bar"
          :style="{ top: !openMenu ? `${10 * (index) - 8}px` : 0 }" />
      </div>
    </nav>

    <div v-if="!isMobile || openMenu">
      <ul :class="!isMobile ? 'monut-nav__bar' : ''" :style="isMobile ? { paddingBottom: '4vh' } : {}">
        <li @click="drawerActions()">
          <router-link to="/">
            Home
          </router-link>
        </li>
        <li v-for="(s, i) in sections" @click="scrollToSection(s.id)" :key="i">
          {{ s.title }}
        </li>
        <li>
          <a href="/images/menu.png">Menu</a>
        </li>
        <li @click="drawerActions()">
          <router-link to="/smithfield">
            Smithfield (new!)
          </router-link>
        </li>
      </ul>
    </div>

  </nav>
</template>

<script lang="js">
export default {
  name: 'monut-nav',
  data() {
    return {
      openMenu: false,
      sections: [
        {
          title: 'Info',
          id: 'info',
        },
        {
          title: 'Products',
          id: 'menu',
        },
      ]
    }
  },
  props: {
    isMobile: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  methods: {
    /**
     * Opens or closes the menu depending on the state of the menu.
     */
    drawerActions() {
      this.openMenu = !this.openMenu;
    },

    /**
     * Smoothly scrolls to the section of the website corresponding to the ID
     * @param id
     */
    scrollToSection(id) {
      this.drawerActions();
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: 'smooth',
      });
    },
  },
}
</script>

<style lang="scss">
@import '../styles/base.scss';

.monut-nav {
  color: $monut-tertiary-color;
  background-color: $monut-primary-color;
  width: 100%;
  z-index: 40;
  position: fixed;
  font-size: $monut-text;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 0.5vh 0;

  ul {
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0 1vw;
    overflow: hidden;

    li {
      cursor: pointer;
      margin: 1vh 1vw;

      &:hover {
        text-decoration: underline dotted;
      }
    }
  }

  img {
    max-width: 47.75px;
    margin-left: 3vw;
  }

  // back to top of page button
  &__up {
    cursor: pointer;
    position: fixed;
    bottom: 0;
    right: 2vw;
    padding: 5px;
    margin: 30px auto;
    background-color: $monut-black;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    transition: all 0.3s linear;
    box-shadow: 5px 5px 0 $monut-tertiary-color;

    &:hover {
      box-shadow: unset;
      transform: translate(5px, 5px);
    }

    &::after {
      content: "";
      position: absolute;
      left: 17px;
      z-index: 110;
      display: block;
      width: 25px;
      height: 25px;
      border-top: 3px solid $monut-primary-color;
      border-left: 3px solid $monut-primary-color;
      top: 20px;
      transform: rotate(45deg);
    }
  }

  &__bar {
    top: 0;
    width: 100%;
    height: fit-content;
    margin: 1rem 0;
    background-color: $monut-primary-color;
    display: inline-flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      justify-content: flex-end;
      align-items: center;
    }

    &--menu {
      margin-right: 5vw;
      margin-bottom: 3vh;
      width: 35px;
      height: auto;
      cursor: pointer;
      position: relative;

      &--bar {
        background-color: $monut-tertiary-color;
        position: absolute;
        width: 100%;
        height: 5px;
        transition: all 0.5s;
      }

      &--active {
        margin: 0 0.5em 0.85em;
        width: 35px;
        height: auto;
        cursor: pointer;
        position: relative;

        > :first-child {
          top: 10px;
          left: 0;
          transform: rotate(45deg);
        }

        > :nth-child(2) {
          top: 10px;
          left: 0;
          transform: rotate(-45deg);
        }
      }
    }
  }
}
</style>