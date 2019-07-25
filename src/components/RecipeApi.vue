<template>
  <div class="container">
    <div class="form-group">
      <label for="exampleFormControlSelect1">Testing...</label>
    </div>
  </div>
</template>
<script>
import ApiConfig from '@/Api/ApiKey.js'
import unirest from 'unirest'

export default {
  name: 'RecipeApi',
  props: ['RecipeApi'],
  data () {
    return {
    }
  },
    updated() {
    this.getApiInfo();
  },
  methods: {
    traer (result) {
      fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/{479101}/information')
        .then(response => response.json())
        .then(data => console.log(JSON.stringify(data.response.result.body)))
        .catch(error => console.log(error))
    }
  }
}
</script>
