<template>
  <div class="monut-button">
    <div v-if="route">
      <router-link :to="route" tag="button">
          <span>
            <slot />
          </span>
      </router-link>
    </div>

    <div v-if="url">
      <button @click="toLink" formtarget="_blank" >
          <span>
            <slot />
          </span>
      </button>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: 'monut-button',
  props: {
    /**
     * The route which the button should direct to
     */
    route: {
      type: String,
      default: '',
      required: false,
    },

    /**
     * The URL of the page which the button should direct to
     */
    url: {
      type: String,
      default: '',
      required: false,
    }
  },
  computed: {
    /**
     * The action the button should take to go to the link
     * @returns {string}
     */
    toLink() {
      return window.open(this.url, '_blank');
    },
  },
}
</script>

<style lang="scss">
@import "../styles/_base.scss";

.monut-button {
  width: 100%;
  border-radius: 10px;
  padding: 1rem;
  background-color: $monut-tertiary-color;

  text-align: center;
  box-shadow: 5px 5px 0 1px $monut-black;
  transition: 0.5s;

  &:hover {
    transform: translateX(5px) translateY(5px);
    box-shadow: unset;
  }

  @media only screen and (min-width: 785px) {
    width: 30%;
  }

  span {
    cursor: pointer;
    color: $monut-primary-color;
    font-weight: 500;
  }

  button {
    cursor: pointer;
    background: $monut-tertiary-color;
    border-radius: 10px;
    display: inline-block;
    border: 0;
    padding: 0;
    margin: 0;
    font-family: 'Patrick Hand', serif;
    font-size: $monut-text;
    line-height: 1;
  }
}
</style>