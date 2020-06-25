<template>
  <div id="app">
    <Header />

    <Search />

    <RecipeCardList :recipes="recipes"></RecipeCardList>

    <Footer></Footer>
  </div>
</template>

<script>
import RecipeCardList from '@/components/RecipeCardList.vue';
import Footer from '@/components/Footer.vue';

export default {
	name: 'home',
	components: { RecipeCardList, Footer },
	data() {
		return {
			recipes: [],
			search: ''
		};
	}
};
</script>
<style lang="scss" scoped>
.header {
	height: 34%;
}
.jumbotron {
	background-image: url('https://www.diabetes.org/sites/default/files/styles/paragraph_50_50/public/2019-08/Diabetes-Superfoods-min.jpg');
	background-size: cover;
	.title {
		color: #000;
		letter-spacing: 1px;
		font-family: 'Lilita One', cursive;
		z-index: 1;
		margin: 0;
		letter-spacing: 3px;
	}
	h1 {
		padding-bottom: 20px;
		font-size: 2.7em;
	}
	h2 {
		font-size: 2.5em;
		padding-top: 20px;
	}
}

// .jumbotron:before {
//   content: '';
//   width: 100%;
//   height: 40%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   background: rgba(249, 193, 50, 0.5);
//   opacity: 0.5;
//   z-index: 1;
// }
</style>
