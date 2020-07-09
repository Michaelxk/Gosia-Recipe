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
      <h4 class="title mb-3 text-center">{{ recipe.title }}</h4>
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container span {
  margin-right: 5px;
}
.btn {
  width: 100%;
}
</style>
