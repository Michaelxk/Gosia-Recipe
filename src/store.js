import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    // input: '',
    results: [],
    baseUri: ''
  },
  mutations: {},
  actions: {
    getApiInfo: context => {
      context.commit('getApiInfo');
    }
  }
});
