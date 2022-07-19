<script setup>

</script>

<template>
    <div class="monut-page"
    data-aos="fade-down" 
    data-aos-duration="2000">
        <slot />
    </div>
</template>

<style lang= "scss">
.monut-page {
    margin-left: 20px;
    margin-right: 20px;
    min-height: 90vh;

    @media only screen and (min-width: 900px) {
        display: block;
        margin-right: auto;
        margin-left: auto;
        max-width: 900px;
    }
}
</style>