<script setup>

import {
    monutPage
} from '../components/component-export.js';

</script>

<template>
    <section class="monut-info">
        <monut-page>

        <div class="monut-info__location">
            <h2>Location</h2>
            <p>873 Main Street</p>
            <p>Waltham, MA</p>
            <p>(781) 893 - 1809</p>
        </div>

        <div class="monut-info__hours">
            <h2>Hours of Operation</h2>
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
        p {
            text-align: center;
        }
    }
    &__hours {
        text-align: center;
    }
}
</style>