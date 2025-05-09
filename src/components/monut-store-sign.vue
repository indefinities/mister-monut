<template>
  <div class="monut-store-sign centered-page">
    <div>
      <h2>Hours of Operation 🕚</h2>

      <div class="monut-store-sign__content">
        <p v-for="(d, i) in schedule" :key="i">{{ d.day }} — {{ d.hours ? `${d.hours.open} to ${d.hours.close}` :
          'closed' }}</p>
      </div>
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
  text-align: center;

  @media (max-width: 765px) {
    p {
      font-size: 1.65rem;
    }
  }

  h2 {
    width: fit-content;
  }


  &__content {
    width: fit-content;
    margin: 3vh 0;
  }
}
</style>