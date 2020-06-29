<template>
  <div class="nutrition-fact">
    <div class="container">
      <div class="jumbotron"></div>
      <div class="recipe-title">
        <h5 class="title text-center">{{ recipeId }}</h5>
      </div>
      <div class="summary">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quod
          ad iure explicabo voluptates temporibus quaerat, vel repellendus
          laboriosam tempore sequi praesentium officia dolorum! Placeat cum
          minus doloribus neque. Fugit?
        </p>
      </div>
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
        <div class="instruction-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            voluptatem provident labore eius reprehenderit, vitae molestiae
            consequuntur quam sint delectus minima recusandae ea amet officiis
            iste! Nam ipsum ea qui!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'NutritionFact',
  data: () => ({}),
  created() {
    this.fetchRecipeInformation();
  },
  computed: {
    ...mapState(['recipeInformation', 'recipes']),
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
