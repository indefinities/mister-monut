<script setup>

import {
    monutPage
} from '../components/component-export.js';

</script>

<template>
    <section class="monut-info">
        <monut-page>

        <div class="monut-info__location">
            <span class="text-h3">Location</span>

            <div class="monut-info__location--content">
                <img src="../assets/map-location.png" />

                <p>873 Main Street</p>
                <p>Waltham, MA</p>
                <p>(781) 893 - 1809</p>
            </div>

        </div>

        <div class="monut-info__hours">
            <span class="text-h6">Hours of Operation</span>
            <div>
                <p>Mon & Tues - CLOSED</p>
                <p>Wed & Thurs - 11AM - 7PM</p>
                <p>Fri & Sat - 11AM - 8PM</p>
                <p>Sun - 11AM - 6PM</p>
            </div>
        </div>

        </monut-page>
    </section>
</template>

<style lang="scss">
.monut-info {
    &__location {

        &--content {
            width: 100%;
            display: block;
            margin-top: 20px;
            margin-right: auto;
            margin-left: auto;
            text-align: center;
        }
    }
    &__hours {
        text-align: center;
        padding-top: 150px;
        padding-bottom: 50px;
        background: no-repeat center url(../assets/store-sign.svg)
    }
}
</style>