<template>
    <div class="monut-nav">
        <div v-if="!this.openMenu" class="monut-nav__bar">
          <div @click="this.drawerActions()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200">
              <path fill="#6d6875" d="M62.16 200.16h1075.6v156H62.16zM62.16 522h1075.6v156H62.16zM62.16 843.84h1075.6v156H62.16z"/>
            </svg>
          </div>

        </div>

        <div class="monut-nav__menu" v-if="this.openMenu">
          <div class="monut-nav__menu--close" @click="this.drawerActions()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200">
              <path fill="#6d6875" d="M600 30C285.6 30 30 285.6 30 600s255.6 570 570 570 570-255.6 570-570S914.4 30 600 30zm298.8 747.6L776.4 900 598.8 722.4 421.2 900 298.8 777.6 476.4 600 298.8 422.4 421.2 300l177.6 177.6L776.4 300l122.4 122.4L721.2 600z"/>
            </svg>
          </div>
            <ul>
                <li v-for="(item, index) in items" :key="index">
                    <a :href="item.id">{{ item.title }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="js">
export default {
    name: 'monut-nav',
    data() {
        return {
            openMenu: false,
            items: [
                {
                    title:'Home',
                    id: '#home'
                }, 
                {
                    title:'Info',
                    id: '#info'
                },
                {
                    title:'Menu',
                    id: '#menu'
                },
                {
                    title:'Contact Us',
                    id: '#contact-us'
                },
            ]
        }
    },
  methods: {
      drawerActions() {
        this.openMenu = !this.openMenu;
      }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/base.scss';

.monut-nav {
    z-index: 1;
    min-width: 100%;
    position: fixed;
    top: 0;
    font-size: 18pt;

    &__bar {
      display: flex;
      align-items: baseline;
      justify-content: flex-start;
      background-color: $monut-primary-color;

      svg {
        cursor: pointer;
        padding-top: 2vh;
        padding-left: 5vw;
        width: 50px;
      }
    }

  &__menu {
    z-index: 1;
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

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  a {
    color: $monut-dark-color;
    font-size: 64px;
    display: block;
    text-align: center;
    padding: 16px;
    text-decoration: none;
  }


}
</style>