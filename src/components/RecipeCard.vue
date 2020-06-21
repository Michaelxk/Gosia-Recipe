<template>
  <div class="container">
    <div class="searchRecipe-content">
      <form class="form-inline my-2 my-lg-0" @submit.prevent="fetchRecipes">
        <b-form-input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search Recipes"
          v-model="input"
          required
        ></b-form-input>
      </form>
    </div>
    <div class="result">
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
            class="btn btn-warning"
            :to="{ name: 'nutritionFact', params: { id: recipe.id } }"
            >Preparation</router-link
          >
        </span>
      </b-card>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'RecipeCard',
  props: ['RecipeCard'],
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
    },
    fetchRecipeInformation() {}
  }
};
</script>
<style scope>
.form-inline .form-control {
  display: flex;
  width: 80%;
  margin: 0 auto;
  margin-top: -60px;
  z-index: 1;
}

b-card-text {
  display: flex;
}

span:nth-child(1) {
  margin-right: 10px;
}

.img-fluid {
  width: 90%;
  max-width: 100%;
  display: flex;
  margin: 0 auto;
}
</style>
