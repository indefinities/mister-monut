<script setup>

const isMenuOpen = false;

function openMenu() {
    isMenuOpen = true;
}
</script>

<template>
    <div class="monut-nav">
        <div @click="openMenu()"
        class="monut-nav__icon">
            <img src="../assets/menu.svg" />
        </div>
        
    </div>
</template>

<style lang= "scss">
.monut-nav {
    
    &__icon {
        width: 50px;
        margin: 3vh 0 0 3vw;
    }
}
</style>