<template>
  <div class="monut-store-sign">
    <h2>🕚 Hours of Operation</h2>

    <div class="monut-store-sign__content">
      <ul v-for="(d, i) in daysOfWeek" :key="i">
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
  data() {
    return {
      businessHours: [
        {
          open: "7:30am",
          close: "7:00pm"
        },
        {
          open: "8:00am",
          close: "5:00pm"
        }
      ],
      daysOfWeek: []
    }
  },
  mounted() {
    this.daysOfWeek = [
      {
        day: "Monday",
      },
      {
        day: "Tuesday"
      },
      {
        day: "Wednesday",
        hours: this.businessHours[0]
      },
      {
        day: "Thursday",
        hours: this.businessHours[0]
      },
      {
        day: "Friday",
        hours: this.businessHours[0]
      },
      {
        day: "Saturday",
        hours: this.businessHours[0]
      },
      {
        day: "Sunday",
        hours: this.businessHours[1]
      }
    ]
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