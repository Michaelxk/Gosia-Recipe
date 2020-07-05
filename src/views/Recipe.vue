<template>
  <div class="nutrition-fact">
    <div class="container">
      <div class="recipe-title">
        <h5 class="title text-center">{{ recipeId }}</h5>
        <!-- <h4>{{ recipe.title }}</h4> -->
      </div>
      <div class="jumbotron"></div>
      <h6 class="ingradients-title">Ingredients:</h6>
      <div class="ingredients-list">
        <ul>
          <li>aslfkajsfsal</li>
          <li>aslfkajsfsal</li>
          <li>aslfkajsfsal</li>
        </ul>
      </div>
      <div class="preparation">
        <h6 class="ingradients-title">Preparation:</h6>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'RecipeView',
	data: () => ({}),
	created() {
		this.fetchRecipeInformation();
	},
	computed: {
		...mapState(['recipeInformation']),
		recipeId() {
			return this.$route.params.id;
		}
	},
	methods: {
		fetchRecipeInformation() {
			this.$store.dispatch('getRecipeInformation', this.recipeId);
		}
	}
};
</script>
<style scoped>
.jumbotron {
	height: 7em;
}
.title {
	margin-top: 1em;
}
.ingradients-title {
	color: #494949;
}
li {
	list-style: none;
}
</style>
