<template>
  <div id="app">
    <Header />

    <Search @searchRecipes="fetchRecipes" />

    <RecipeCardList :recipes="recipes" :baseUri="baseUri" />

    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex';
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
	computed: {
		...mapState(['recipes', 'baseUri'])
	},
	methods: {
		fetchRecipes(input) {
			this.$store.dispatch('getRecipes', input);
		}
	}
};
</script>
<style scoped></style>
