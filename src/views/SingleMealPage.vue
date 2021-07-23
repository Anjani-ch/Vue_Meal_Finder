<template>
  <div v-if="hasData" id="single-meal">
    <router-link to="/">
      <button>Go Back</button>
    </router-link>
    <h1>{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" />
    <a :href="meal.strYoutube" target="_blank">Watch Video Tutorial</a>
    <div id="ingredients">
      <h1>Ingredients</h1>
      <ul>
        <li v-for="index in mealIngredients.length" :key="index">
          {{ ingredients[index - 1] }}: {{ measurements[index - 1] }}
        </li>
      </ul>
    </div>
    <div id="instructions">
      <h1>Instructions</h1>
      <p>{{ meal.strInstructions }}</p>
    </div>
  </div>
  <h1 class="error-msg" v-if="hasError">{{ error }}</h1>
</template>
<script>
export default {
  name: "SingleMealPage",
  data() {
    return {
      data: null,
      error: null,
      mealIngredients: null,
      mealMeasurements: null,
    };
  },
  methods: {
    async getMeal() {
      try {
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" +
            this.$route.params.id
        );
        let data = await res.json();

        let objectKeys = null;
        let objectValues = null;
        let ingredients = [];
        let measurements = [];

        data = data.meals[0];

        if (!data) throw new Error("Failed To Get Meal Data");

        objectKeys = Object.keys(data);
        objectValues = Object.values(data);

        objectKeys.forEach((key, index) =>
          key.includes("Ingredient") && objectValues[index]
            ? ingredients.push(objectValues[index])
            : ""
        );

        objectKeys.forEach((key, index) =>
          key.includes("Measure") && objectValues[index]
            ? measurements.push(objectValues[index])
            : ""
        );

        this.data = data;
        this.mealIngredients = ingredients;
        this.mealMeasurements = measurements;
      } catch (err) {
        this.error = err.message;
      }
    },
  },
  computed: {
    hasData() {
      return this.data ? true : false;
    },
    hasError() {
      return this.error ? true : false;
    },
    meal() {
      return this.data;
    },
    ingredients() {
      return this.mealIngredients;
    },
    measurements() {
      return this.mealMeasurements;
    },
  },
  created() {
    this.getMeal();
  },
};
</script>
<style scoped>
#single-meal {
  background: white;
  padding: 20px 25px;
  border-radius: 10px;
}

button {
  padding: 10px 15px;
  border: 0;
  border-radius: 20px;
  color: white;
  background: rgb(91, 91, 206);
  cursor: pointer;
}

img {
  width: 50%;
  display: block;
  margin: auto;
  margin-bottom: 15px;
}

ul {
  list-style: none;
  padding: 0;
  line-height: 25px;
}

#instructions p {
  line-height: 25px;
}

@media (max-width: 768px) {
  img {
    width: 70%;
  }
}
</style>
