import Vue from 'vue';
import Vuex from 'vuex';
import Api from './Api';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    // input: '',
    recipes: [],
    baseUri: '',
    recipeInformation: {}
  },
  getters: {},
  mutations: {
    mutateRecipes(state, { recipes, baseUri }) {
      state.recipes = recipes;
      state.baseUri = baseUri;
    },
    mutateRecipeInformation(state, { recipeInformation }) {
      state.recipeInformation = recipeInformation;
    }
  },
  actions: {
    getRecipes({ commit }, input) {
      Api.getRecipes(input).then(result => commit('mutateRecipes', result));
    },
    getRecipeInformation({ commit }, id) {
      Api.getRecipeInformation(id).then(result =>
        commit('mutateRecipeInformation', result)
      );
    }
  }
});
