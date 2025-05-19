<template>
    <section class="monut-sm-home">
        <div class="centered-page">
            <h1> Welcome to Smithfield, Rhode Island! </h1>
            <img style="width: 100%;" src="/images/smithfield-cover.jpeg" />
            <div class="centered-section order-online">
                <p>order online for pickup or deliery:</p>
                <monut-button url="https://mister-monut-smithfield.square.site/">
                    ➡️ check out our square site!
                </monut-button>
            </div>

            <div class="centered-section">
                <h1>find us at:</h1>
                <div style="margin-bottom: 2rem;">
                    <p>1201 Douglas Pike <br />
                        Smithfield, RI 02917</p>
                    <a href="tel:+14012310202">☎ +1 (401) 231 - 0202</a>
                </div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d47496.95158321641!2d-71.5697826!3d41.9238279!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e440fa8397aea1%3A0x38e2aebc527e7bc!2sWise%20Guys%20Deli%20-%20Smithfield!5e0!3m2!1sen!2sus!4v1746665304864!5m2!1sen!2sus"
                    style="width: 100%; border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade" />
            </div>

            <monut-store-sign style="margin: 2rem 0" :schedule="sched" />
        </div>

    </section>
</template>

<script lang="js">
import schedules from '../data/schedules.json';
import { monutStoreSign, monutButton } from "../components/component-export.js";

export default {
    name: "monut-smithfield",
    components: {
        monutButton,
        monutStoreSign,
    },
    data() {
        return {
            sched: schedules.smithfield
        }
    }
}
</script>

<style lang="scss" scoped>
.monut-sm-home {
    margin: 0 2rem;
    overflow-x: clip;
    padding-top: 10vh;

    .order-online {
        text-align: center;
        border-radius: 25px;
        border: 1px dashed black;
        padding: 4em 1em;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }
}
</style>