<template>
  <div class="container">
    <div class="searchRecipe-content">
      <form class="form-inline my-2 my-lg-0" @submit.prevent="getApiInfo()">
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
        v-for="(result, id) in results"
        :key="id"
        :img-src="baseUri + result.image"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="img-fluid mb-2"
      >
        <h4>{{ result.title }}</h4>
        <b-card-text>
          <span class="badge badge-info">Servings: {{ result.servings }}</span>
          <span class="badge badge-secondary mr-10"
            >Ready in : {{ result.readyInMinutes }} Minutes</span
          >
        </b-card-text>
        <span>
          <router-link
            class="btn btn-warning"
            :to="{ name: 'nutritionFact', params: { id: result.id } }"
            >Preparation</router-link
          >
        </span>
      </b-card>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'RecipeCard',
  props: ['RecipeCard'],
  data() {
    return {
      input: '',
      results: [],
      baseUri: ''
    };
  },
  created() {
    this.getApiInfo();
  },
  methods: {
    getApiInfo() {
      const config = {
        params: {
          number: 10,
          query: this.input
        },
        headers: {
          'X-RapidAPI-Host':
            'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
          'X-RapidAPI-Key': '8910cc5519msh2f5fd45de68a240p1c1946jsn2cdaf7a2b819'
        }
      };
      axios
        .get(
          'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
          config
        )
        .then(response => {
          console.log(response);
          this.baseUri = response.data.baseUri;
          this.results = response.data.results;
        })
        .catch(err => {
          console.log(err);
        });
    }
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
