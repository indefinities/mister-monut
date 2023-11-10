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

        <div v-if="isMobile && !this.openMenu" class="monut-nav__bar">
          <div @click="this.drawerActions()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200">
              <path fill="#6d6875" d="M62.16 200.16h1075.6v156H62.16zM62.16 522h1075.6v156H62.16zM62.16 843.84h1075.6v156H62.16z"/>
            </svg>
          </div>

        </div>

<!--      IF THE MENU IS EXPANDED-->
        <div class="monut-nav__menu" v-if="this.openMenu">
          <div class="monut-nav__menu--close" @click="this.drawerActions()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200">
              <path fill="#6d6875" d="M600 30C285.6 30 30 285.6 30 600s255.6 570 570 570 570-255.6 570-570S914.4 30 600 30zm298.8 747.6L776.4 900 598.8 722.4 421.2 900 298.8 777.6 476.4 600 298.8 422.4 421.2 300l177.6 177.6L776.4 300l122.4 122.4L721.2 600z"/>
            </svg>
          </div>
            <ul>
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
        </div>
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
    padding: 1vh 1vw;

    ul {
      width: 90vw;
      list-style-type: none;
      margin: 0;
      padding: 0 1vw;
      overflow: hidden;

      li {
        cursor: pointer;
        margin: 0 10px;
      }
    }

    &__bar {
      background-color: $monut-primary-color;
      border-radius: 25px;
      border: 1px dashed $monut-secondary-color;
      display: inline-flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;

      svg {
        cursor: pointer;
        padding-top: 2vh;
        padding-left: 5vw;
        width: 50px;
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