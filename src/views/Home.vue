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

export default {
  name: 'home',
  components: { Header, Search, RecipeCardList, Footer },
  data() {
    return {
      recipes: []
    };
  }
};
</script>
<style scoped></style>
