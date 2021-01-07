<template>
  <div>
    <div class="loading" v-if="isLoading">
      <h3>loading...</h3>
    </div>
    <div v-else class="wrapper">
      <b-card class="card" :img-src="recipeInformation.image">
        <div class="recipe-title">
          <h5 class="title text-center">
            {{ recipeInformation.title }}
          </h5>
        </div>

        <section class="nutrition-facts">
          <div class="icons">
            <i class="fas fa-seedling"></i>
            <i class="fas fa-bread-slice"></i>
            <i class="fas fa-percent"></i>
          </div>
          <div class="nutrition-facts-details mt-2 mb-5 ">
            <h6>
              Vegetarian: <span> {{ recipeInformation.vegetarian }} </span>
            </h6>
            <h6>
              Gluten Free: <span>{{ recipeInformation.glutenFree }}</span>
            </h6>
            <h6>
              Health Score: <span>{{ recipeInformation.healthScore }}%</span>
            </h6>
          </div>
        </section>
        <b-card-text>
          <h6 class="ingradients-title">Ingredients:</h6>
          <div class="ingredents-content">
            <div class="ingredients-list mb-3">
              <ul>
                <li
                  v-for="ingredient in recipeInformation.extendedIngredients"
                  :key="ingredient.id"
                >
                  {{ ingredient.original }}
                </li>
              </ul>
            </div>
          </div>
        </b-card-text>
        <b-card-text>
          <div class="preparation">
            <h6 class="ingradients-title">Preparation:</h6>
            <div class="instruction-content">
              <p class="instruction">
                {{ recipeInformation.instructions }}
              </p>
            </div>
          </div>
          <div class="secundary-info">
            <span class="badge badge-info"
              >Servings: {{ recipeInformation.servings }}</span
            >
            <span class="badge badge-secondary mr-10"
              >Ready in : {{ recipeInformation.readyInMinutes }} Min.</span
            >
          </div>
        </b-card-text>
      </b-card>
      <section class="nutrition-facts-secondary mb-5">
        <div class="container-fluid">
          <h5 class="title mb-3 mt-5">Nutrition Facts:</h5>
          <div class="notice notice-success">
            <strong>Vegan:</strong> {{ recipeInformation.vegan }}
          </div>
          <div class="notice notice-info">
            <strong>Is a popular Recipe ?</strong>
            {{ recipeInformation.veryPopular }}
          </div>
          <div class="notice notice-warning">
            <strong>Very Healthy:</strong>
            {{ recipeInformation.veryHealthy }}
          </div>
          <!-- <div class="notice  notice-sm">
            <strong>Sourse:</strong>
            {{ recipeInformation.cuisines[0] }}
          </div> -->
          <!-- <div class="summary">
            {{ recipeInformation.summary }}
          </div> -->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'NutritionFact',
  data() {
    return {
      ingredients: [],
      isLoading: false
    };
  },
  created() {
    this.isLoading = true;
    this.fetchRecipeInformation();
  },
  computed: {
    ...mapState(['recipeInformation', 'recipes', 'baseUri']),
    recipeId() {
      return this.$route.params.id;
    }
  },
  methods: {
    fetchRecipeInformation() {
      this.$store
        .dispatch('getRecipeInformation', this.recipeId)
        .then(() => (this.isLoading = false));
    }
  }
};
</script>
<style>
.card .title,
.nutrition-facts {
  margin-bottom: -1em;
}

.ingredents-content img {
  max-width: 100%;
}

li {
  list-style: none;
}
h5 {
  font-size: 1.5em;
}
.badge {
  margin-right: 10px;
  padding: 5px 5px;
}
.secundary-info {
  display: flex;
}
.icons {
  margin-top: 3em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
}
.nutrition-facts-details {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  color: #6c757d;
}
.nutrition-facts-details h6 {
  font-size: 0.6em;
  margin-top: -10px;
}
.nutrition-facts-details h6 span {
  font-weight: bold;
  color: #42a3b8;
}
.fas {
  font-size: 1.5em;
  color: #42a3b8;
  padding: 10px;
  margin: 5px;
}
.fas:nth-child(2) {
  color: #f9c132;
}
.fas:nth-child(3) {
  color: #6c757d;
}
.instruction {
  font-size: 1em;
}
.notice {
  padding: 15px;
  background-color: #fafafa;
  border-left: 6px solid #7f7f84;
  margin-bottom: 10px;
  -webkit-box-shadow: 0 5px 8px -6px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 5px 8px -6px rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 8px -6px rgba(0, 0, 0, 0.2);
}
.notice-success {
  border-color: #80d651;
}
.notice-success > strong {
  color: #80d651;
}
.notice-info {
  border-color: #45abcd;
}
.notice-info > strong {
  color: #45abcd;
}
.notice-warning {
  border-color: #feaf20;
}
.notice-warning > strong {
  color: #feaf20;
}
</style>
