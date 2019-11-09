<template>
  <div id="app">
    <header role="header" class="jumbotron">
      <div class="container-info">
        <h2 class="title text-center">Gosia</h2>
        <h1 class="title text-center">Recipes</h1>
      </div>
  </header>
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
  background-image: url('https://www.diabetes.org/sites/default/files/styles/paragraph_50_50/public/2019-08/Diabetes-Superfoods-min.jpg');
  background-size: cover;
  .title {
    color: #000;
    font-weight: bold;
    font-size: 2.3rem;
    background: rgba(249, 193, 50, 0.5);
    margin: 0;
  }
  h1 {
    padding-bottom: 20px;
  }
  h2 {
     padding-top: 20px;
  }
}

</style>
