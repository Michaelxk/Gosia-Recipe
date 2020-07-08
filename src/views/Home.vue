<template>
  <div id="app">
    <Header />

    <Search @fetchQuery="fetchRecipes" class="search" />

    <RecipeCardList :recipes="recipes" :baseUri="baseUri" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Search from '@/components/Search.vue';
import RecipeCardList from '@/components/RecipeCardList.vue';
import { mapState } from 'vuex';

export default {
  name: 'home',
  components: { Header, Search, RecipeCardList },
  data() {
    return {
      input: null
    };
  },
  created() {
    this.fetchRecipes();
  },
  computed: {
    ...mapState(['recipes', 'baseUri'])
  },

  methods: {
    fetchRecipes(input) {
      this.$store.dispatch('getRecipes', input);
      console.log(input);
    }
  }
};
</script>
