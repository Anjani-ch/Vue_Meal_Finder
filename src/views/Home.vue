<template>
  <h1>Meal Finder</h1>
  <input
    type="text"
    placeholder="Search Meal..."
    v-model="searchTerm"
    @keyup.enter="getMeals"
    @keyup="error = null"
  />
  <AllMeals v-if="hasMeals" :data="meals" />
  <h1 class="error-msg" v-if="hasError">{{ error }}</h1>
</template>

<script>
import AllMeals from "@/components/AllMeals.vue";

export default {
  name: "Home",
  components: {
    AllMeals,
  },
  data() {
    return {
      data: null,
      error: null,
      searchTerm: "",
    };
  },
  methods: {
    async getMeals() {
      this.data = null;
      try {
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
            this.searchTerm
        );
        let data = await res.json();

        data = data.meals;

        if (!data) throw new Error("Failed To Get Meals");

        this.data = data;
      } catch (err) {
        this.error = err.message;
      }
      this.searchTerm = "";
    },
  },
  computed: {
    hasMeals() {
      return this.data ? true : false;
    },
    hasError() {
      return this.error ? true : false;
    },
    meals() {
      return this.data;
    },
  },
};
</script>
<style scoped>
h1 {
  color: white;
}

input {
  border: 0;
  outline: 0;
  padding: 10px 15px;
  border-radius: 20px;
  width: 100%;
  box-sizing: border-box;
}
</style>