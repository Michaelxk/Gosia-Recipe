<template>
  <div class="searchRecipe-content">
    <form class="form-inline my-2 my-lg-0" @fetchRecipes="fetchRecipes">
      <b-form-input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search Recipes"
        v-model="input"
        required
      ></b-form-input>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      input: ''
    };
  }
};
</script>

<style scoped>
.searchRecipe-content {
  margin: -2em 0px 30px;
}
</style>
