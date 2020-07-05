<template>
  <div id="app">
    <Header />

    <Search @searchRecipes="fetchRecipes" />

    <RecipeCardList />

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Search from '@/components/Search.vue';
import RecipeCardList from '@/components/RecipeCardList.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'home',
  components: { Header, Search, RecipeCardList, Footer },
  data() {
    return {};
  },
  created() {
    this.fetchRecipes();
  },
  methods: {
    fetchRecipes(input) {
      this.$store.dispatch('getRecipes', input);
    }
  }
};
</script>
<style scoped></style>
