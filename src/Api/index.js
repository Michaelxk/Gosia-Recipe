import axios from 'axios';

axios.defaults.headers.common['X-RapidAPI-Host'] =
  'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com';
axios.defaults.headers.common['X-RapidAPI-Key'] =
  '8910cc5519msh2f5fd45de68a240p1c1946jsn2cdaf7a2b819';

export default {
  // returns recipes searched from input
  getRecipes(input) {
    const config = {
      params: {
        number: 10,
        query: input
      }
    };
    return axios
      .get(
        'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
        config
      )
      .then(response => {
        console.log(response);
        const baseUri = response.data.baseUri;
        const recipes = response.data.results;
        return { recipes, baseUri };
      })
      .catch(err => console.log(err));
  },
  getRecipeInformation(id) {
    const config = {};
    return axios
      .get(
        `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
        config
      )
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(err => console.log(err));
  }
};
