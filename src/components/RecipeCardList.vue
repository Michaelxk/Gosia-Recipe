<template>
  <div class="container">
    <div class="result">
      <RecipeCard v-for="recipe in recipes" :baseUri="baseUri" :recipe="recipe" :key="recipe.id" />
    </div>
  </div>
</template>
<script>
import RecipeCard from './RecipeCard';

export default {
	name: 'RecipeCardList',
	components: { RecipeCard },
	props: {
		recipes: Array,
		baseUri: String
	}
};
</script>
