<template>
  <b-card
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
      <span class="badge badge-secondary mr-10">
        Ready in : {{ recipe.readyInMinutes }} Minutes
      </span>
    </b-card-text>
    <span>
      <router-link
        @submit.prevent="getRecipeInformation"
        class="btn btn-warning"
        :to="{ name: 'nutritionFact', params: { id: recipe.id } }"
      >
        Preparation
      </router-link>
    </span>
  </b-card>
</template>

<script>
export default {
  props: {
    recipe: Object,
    baseUri: String
  }
};
</script>
