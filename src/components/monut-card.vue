<template>
  <div class="monut-card">
    <img class="monut-card__image"
        :src="image" />

    <div class="monut-card__content">
      <h2>
        <slot name="title" />
      </h2>
      <p>
        <slot name="desc" />
      </p>
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
  margin: 5vh 0;
  width: 35vw;
  border-radius: 10px;
  background-color: white;
  transition: box-shadow .3s;

  &:hover {
    box-shadow: 0 0 20px rgba(33,33,33,.5);
  }

  &__image {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  &__content {
    padding: 20px;
  }

}

</style>