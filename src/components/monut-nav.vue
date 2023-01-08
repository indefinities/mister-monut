<template>
    <div class="monut-nav">
        <div v-if="isMobile" class="monut-nav__mobile">
            <v-icon icon="mdi-menu" size="x-large" />
        </div>

        <div v-if="!isMobile" class="monut-nav__bar">
            <ul>
                <li v-for="(item, index) in items" :key="index">
                    <a :href="item.id">{{ item.title }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'monut-nav',
    data() {
        return {
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
    props: {
        isMobile: {
            type: Boolean,
            required: false,
            default: false,
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/base.scss';
.monut-nav {
    z-index: 1;
    position: fixed;
    top: 0;
    font-size: 18pt;
    padding-right: 20px;


    &__bar { 
        width: 100vw;
        display: flex;
        align-items: baseline;
        justify-content: flex-end;
        padding-right: 15px;
        background-image: linear-gradient(rgba(255, 215, 215, 1), rgba(255, 215, 215, 0.25));
    }

    &__mobile {
        width: 100vw;
        padding-top: 10px;
        padding-left: 10px;
        align-self: flex-start;
        
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    li {
        float: left;
        padding: 10px;
    }

    a {
        color: black;
        display: block;
        text-align: center;
        padding: 16px;
        text-decoration: none;
    }
}
</style>