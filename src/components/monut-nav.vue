<template>
    <nav class="monut-nav">
      <div v-if="!isMobile" >
        <ul class="monut-nav__bar">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li
              v-for="(s, i) in sections"
              @click="scrollToSection(s.id)" :key="i">
            {{ s.title }}
          </li>
          <li>
            <a href="/images/menu.png">Menu & Prices</a>
          </li>
        </ul>
      </div>

        <nav v-if="isMobile" class="monut-nav__bar" :style="{ height: openMenu ? '40vh' : '5vh' }">
          <div :class="`monut-nav__bar--menu${ openMenu ? '--active' : '' }`"
              @click="drawerActions()"
              aria-label="The hamburger menu button.">
            <div v-for="index in (openMenu ? 2 : 3)"
                 :key="index"
                 class="monut-nav__bar--menu--bar"
                 :style="{top: openMenu ? '' : `${10*(index - 1)}px`}"/>
          </div>


          <!-- IF THE MENU IS EXPANDED-->
          <ul v-if="openMenu">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li
                v-for="(s, i) in sections"
                @click="scrollToSection(s.id)" :key="i">
              {{ s.title }}
            </li>
            <li>
              <router-link to="/menu/">Menu & Prices</router-link>
            </li>
          </ul>
        </nav>


    </nav>
</template>

<script lang="js">
export default {
    name: 'monut-nav',
    data() {
        return {
            openMenu: false,
            isMobile: false,
            sections: [
                  {
                      title:'Info',
                      id: 'info',
                  },
                  {
                      title:'Products',
                      id: 'menu',
                  },
              ]
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
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior:'smooth',
      });
    }
  },
  mounted() {
    // Checks if the window is on a mobile device when mounted
    this.isMobile = window.matchMedia('(max-width: 768px)').matches;
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/base.scss';

.monut-nav {
    width: 100%;
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    color: $monut-tertiary-color;
    font-size: $monut-text;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    padding: 0.5vh 1vw;

    ul {
      width: 90vw;
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

    &__bar {
      background-color: $monut-primary-color;
      border: 2px dashed $monut-secondary-color;
      border-radius: 25px;
      display: inline-flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

      @media (max-width: 768px) {
        width: 95vw;
        justify-content: flex-end;
        align-items: baseline;
      }

      &--menu {
        margin-top: 10px;
        margin-right: 5vw;
        width: 35px;
        height: auto;
        cursor: pointer;
        position: relative;

        &--bar {
          background-color: $monut-tertiary-color;
          position: absolute;
          width: 100%;
          height: 5px;
          left: 0;
          transition: all 0.5s;
        }

        &--active {
          margin: 0.5em 1em 0;
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

  &__menu {
    margin-right: 0;
    width: 100vw;
    height: 100vh;
    background-color: $monut-primary-color;

    &--close {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      svg {
        width: 50px;
        padding-top: 2vh;
        padding-right: 2vw;

      }
    }
  }
}
</style>