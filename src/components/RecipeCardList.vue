<template>
  <div class="container">
    <b-card
      v-for="(recipe, id) in recipes"
      :key="id"
      :img-src="baseUri + recipe.image"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="img-fluid mb-2"
    >
      <h4>{{ recipe.title }}</h4>
      <b-card-text>
        <span class="badge badge-info">Servings: {{ recipe.servings }}</span>
        <span class="badge badge-secondary mr-10"
          >Ready in : {{ recipe.readyInMinutes }} Minutes</span
        >
      </b-card-text>
      <span>
        <router-link
          @submit.prevent="getRecipeInformation"
          class="btn btn-warning"
          :to="{ name: 'nutritionFact', params: { id: recipe.id } }"
          >Preparation</router-link
        >
      </span>
    </b-card>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'RecipeCardList',
  // props: ['RecipeCard'],
  data() {
    return {
      input: ''
    };
  },
  created() {
    this.fetchRecipes();
  },
  computed: mapState(['recipes', 'baseUri']),
  methods: {
    fetchRecipes() {
      this.$store.dispatch('getRecipes', this.input);
    }
  }
};
</script>
