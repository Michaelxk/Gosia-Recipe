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
      <h4 class="title">{{ recipe.title }}</h4>
      <b-card-text>
        <span class="badge badge-info">Servings: {{ recipe.servings }}</span>
        <span class="badge badge-secondary mr-10"
          >Ready in : {{ recipe.readyInMinutes }} Min.</span
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
  computed: {
    ...mapState(['recipes', 'baseUri'])
  }
};
</script>
<style lang="scss">
.container span {
  margin-right: 5px;
}
.btn {
  width: 100%;
}

@media screen and(max-width: 330px) {
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2em;
  }
}
@media screen and(min-width: 330px) {
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5em;
    .title {
      font-size: 1.1em;
    }
    span {
      font-size: 0.7em;
    }
  }
}
</style>
