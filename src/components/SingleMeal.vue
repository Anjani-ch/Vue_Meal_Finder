<template>
  <router-link :to="'/' + meal.idMeal">
    <div class="meal">
      <img :src="meal.strMealThumb" />
      <h2>{{ meal.strMeal }}</h2>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "SingleMeal",
  props: ["currentMeal"],
  data() {
    return {
      meal: this.currentMeal,
    };
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: black;
}

.meal {
  background: white;
  padding-bottom: 5px;
  border-radius: 15px;
}

img {
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
</style>