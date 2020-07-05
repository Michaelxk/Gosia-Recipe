<template>
  <div id="app">
    <Header />

    <Search />

    <RecipeCardList />

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Search from '@/components/Search.vue';
import RecipeCardList from '@/components/RecipeCardList.vue';
import Footer from '@/components/Footer.vue';
import { mapState } from 'vuex';

export default {
  name: 'home',
  components: { Header, Search, RecipeCardList, Footer },
  data() {
    return {
      input: null
    };
  },
  created() {
    this.fetchRecipes();
  },
  computed: {
    ...mapState(['recipes', 'baseUri', 'recipesSearchInput'])
  },
  watch: {
    recipesSearchInput: function(newInput, oldInput) {
      this.fetchRecipes();
    }
  },
  methods: {
    fetchRecipes() {
      this.$store.dispatch('getRecipes', this.recipesSearchInput);
    }
  }
};
</script>
<style scoped></style>
