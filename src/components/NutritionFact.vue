<template>
  <div class="container">
    <div class="recipe-title">
      <h5 class="title text-center">{{ this.$route.params.id }}</h5>
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
</template>

<script>
export default {
  name: 'NutritionFact',
  data: () => ({
    ingredients: null,
    instructions: null,
    recipe: null
  })
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
