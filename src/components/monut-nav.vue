<template>
    <div class="monut-nav">
        <ul>
            <li v-for="(item, index) in items" :key="index">
                {{ item.title }}
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
            title:'Home'
        }, 
        {
            title:'Info'
        },
        {
            title:'Menu'
        },
        {
            title:'Contact Us'
        },
    ]
}),
}
</script>

<style lang="scss" scoped>
.monut-nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    font-size: 18pt;
    padding-right: 20px;

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

    li a {
        display: block;
        text-align: center;
        padding: 16px;
        text-decoration: none;
    }
}
</style>