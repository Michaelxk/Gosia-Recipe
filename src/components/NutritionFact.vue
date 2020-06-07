<template>
  <div class="container">
    <h1>Hello</h1>
  </div>
</template>

<script>
import { getRecipe } from '@/Api';

export default {
	name: 'NutritionFact',
	data: () => ({
		ingredients: null,
		instructions: null,
		recipe: null
	}),
	computed: {
		recipe_id() {
			return this.$route.params.id;
		}
	},
	created() {
		this.recipe = getRecipe(this.recipe_id);
	},
	data() {
		return {};
	}
};
</script>
