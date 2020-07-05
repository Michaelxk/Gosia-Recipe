<template>
  <div class="container">
    <div v-for="(recipe, index) in recipes" :key="index">
      <div class="result">
        <RecipeCard :recipe="recipe" :key="recipe.id" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
	props: {
		recipes: Array
	}
};
</script>

<style>
</style>