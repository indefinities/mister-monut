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
      <button @click="toLink(url)" >
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
  methods: {
    /**
     * The action the button should take to go to the link
     * @returns {string}
     */
    toLink(link) {
      window.open(link, "_blank");
    },
  }
}
</script>

<style lang="scss">
@import "../styles/_base.scss";

.monut-button {
  cursor: pointer;
  padding: 0.5em 0;
  width: 100%;
  border-radius: 10px;
  background-color: $monut-black;
  text-align: center;
  box-shadow: 5px 5px 0 $monut-tertiary-color;
  transition: 0.3s;

  &:hover {
    box-shadow: unset;
    transform: translate(5px, 5px);
  }

  @media (min-width: 375px) {
    width: 50vw;
    padding: 1em;
  }

  span {
    color: $monut-primary-color;
    font-weight: 500;
  }

  button {
    font-family: 'Old Standard TT', serif;
    width: 100%;
    cursor: pointer;
    background: $monut-black;
    border-radius: 10px;
    display: inline-block;
    border: 0;
    padding: 0;
    margin: 0;
    font-size: $monut-text;
    line-height: 1;
  }
}
</style>