<template>
  <div id="meals">
    <SingleMeal v-for="meal in meals" :key="meal.idMeal" :currentMeal="meal" />
  </div>
</template>

<script>
import SingleMeal from "@/components/SingleMeal.vue";

export default {
  name: "AllMeals",
  props: ["data"],
  components: { SingleMeal },
  data() {
    return {
      meals: this.data,
    };
  },
};
</script>

<style scoped>
#meals {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  gap: 15px;
}

@media (max-width: 768px) {
  #meals {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  #meals {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
