<template>
  <div class="container">
    <div class="jumbotron"></div>
    <div class="recipe-title">
      <h2 class="title text-center">{{ result.title }}</h2>
    </div>
    <div class="recipe-ingredients">
      <ul></ul>
    </div>
  </div>
</template>

<script>
import { getRecipe } from '@/Api';

export default {
  name: 'NutritionFact',
  data: () => ({
  //   ingredients: null,
  //   instructions: null,
  //   recipe: null
  // }),
  // computed: {
  //   recipe_id() {
  //     return this.$route.params.id;
  //   }
  // },
  // created() {
  //   this.recipe = getRecipe(this.recipe_id);
  }
};
</script>
