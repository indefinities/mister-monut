<template>
  <div class="monut-card" tabindex="0">
    <img class="monut-card__image"
        :src="image" />

    <div class="monut-card__content">
        <slot name="title" />
<!--        <slot name="desc" />-->
    </div>

  </div>
</template>

<script>
export default {
  name: "monut-card",
  props: {
    image : {
      type: String,
      default: "",
      required: false,
    }
  }

}
</script>

<style lang="scss">

.monut-card {
  width: 45vw;
  height: fit-content;
  margin: 1vh 0;
  border-radius: 10px;
  background-color: white;
  transition: box-shadow .3s;

  @media (min-width: 768px) {
    width: 30vw;
  }

  p {
    font-size: 16pt;
    line-height: 18pt;
    text-align: center;
  }

  &:hover {
    box-shadow: 0 0 20px rgba(33,33,33,.5);
  }

  &__image {
    width: 100%;
    height: 70%;
    border-radius: 10px 10px 0 0;
    object-fit: cover;
  }

  &__content {
    margin: 1em;
  }

}

</style>