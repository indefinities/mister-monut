<template>
    <div class="monut-nav">
        <ul>
            <li v-for="(item, index) in items" :key="index">
                <a :href="item.id">{{ item.title }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
data: () => ({
    isMenuOpen: false,
    group: null,
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
}),
}
</script>

<style lang="scss" scoped>
@import '../styles/base.scss';
.monut-nav {
    z-index: 1;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    font-size: 18pt;
    padding-right: 20px;
    background-color: $monut-bg-color;

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