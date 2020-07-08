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
