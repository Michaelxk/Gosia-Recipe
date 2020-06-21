import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  mutations: {
    setRecipe(state) {}
  },
  actions: {
    getRecipes({ commit }) {
      const config = {
        params: {
          number: 10,
          query: this.input
        },
        headers: {
          'X-RapidAPI-Host':
            'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
          'X-RapidAPI-Key': '8910cc5519msh2f5fd45de68a240p1c1946jsn2cdaf7a2b819'
        }
      };
      axios
        .get(
          'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
          config
        )
        .then(response => {
          console.log(response);
          this.baseUri = response.data.baseUri;
          this.recipes = response.data.results;
        })
        .catch(err => {
          console.log(err);
        });
       
          getRecipes(context) {
            context.commit('getRecipes')
          }
   
    }
  }
});
