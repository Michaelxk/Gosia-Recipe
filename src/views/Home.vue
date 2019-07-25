<template>
  <div id="app">
    <header role="header" class="jumbotron">
      <h3 class="title text-center">Gosia</h3>
      <h2 class="title text-center">Recipe</h2>
    </header>
    <div class="searchRecipe-content">
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search Recipes">
      </form>
    </div>
    <RecipeApi></RecipeApi>
</div>
</template>

<script>
import RecipeApi from '@/components/RecipeApi.vue'

export default {
  name: 'home',
  components: { RecipeApi },
  data () {
    return {
      recipes: []
    }
  }
}
</script>
<style lang="scss" scoped>
.jumbotron {
  .h2 h3 {
    font-size: bold;
  }
}
.searchRecipe-content {
  width: 80%;
  margin-top: -50px;
  margin-left: auto;
  margin-right: auto;
   .form-control {
    display: flex;

 }
}

</style>
