<template>
  <div class="monut-store-sign">
    <h2>🕚 Hours of Operation</h2>

    <div class="monut-store-sign__content">
      <ul v-for="(d, i) in schedule" :key="i">
        <li>
          <p>{{ d.day }} — {{d.hours ? `${d.hours.open} to ${d.hours.close}` : 'closed'}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "monut-store-sign",
  props: {
    schedule: {
      type: Array,
      required: true,
      default: []
    }
  }
}
</script>

<style lang="scss">
@import "../styles/_base";

.monut-store-sign {
  width: 100%;
  text-align: center;

  @media (max-width: 765px) {
    p {
      font-size: 1.65rem;
    }
  }

  ul {
    list-style-type: none;
    margin: 1vh 0;
    padding: 0;
  }

  &__content {
    margin: 3vh 0;
  }
}
</style>