<template>
  <div class="container">
    <div class="recipe-title">
      <h5 class="title text-center mb-5">
        {{ this.recipeInformation.title }}
      </h5>
    </div>
    <h6 class="ingradients-title">Ingredients:</h6>

    <div class="ingredients-list">
      <ul>
        <li>aslfkajsfsal</li>
        <li>aslfkajsfsal</li>
        <li>aslfkajsfsal</li>
      </ul>
    </div>

    <div class="preparation">
      <h6 class="ingradients-title">Preparation:</h6>
      <div class="instruction-content">
        <p>
          {{ this.recipeInformation.instructions }}
        </p>
      </div>
    </div>
    <div class="secundary-info">
      <span class="badge badge-info"
        >Servings: {{ this.recipeInformation.servings }}</span
      >
      <span class="badge badge-secondary mr-10"
        >Ready in : {{ this.recipeInformation.readyInMinutes }} Min.</span
      >
    </div>

    <div class="nutrition-facts">
      <div class="icons">
        <i class="fas fa-seedling"></i>
        <i class="fas fa-bread-slice"></i>
        <i class="fas fa-percent"></i>
      </div>

      <div class="nutrition-facts-details mt-2 ">
        <h6>
          Vegetarian: <span> {{ this.recipeInformation.vegetarian }} </span>
        </h6>
        <h6>
          Gluten Free: <span>{{ this.recipeInformation.glutenFree }}</span>
        </h6>
        <h6>
          Health Score: <span>{{ this.recipeInformation.healthScore }}%</span>
        </h6>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
li {
  list-style: none;
}
h5 {
  font-size: 1.5em;
}
.badge {
  margin-right: 10px;
  padding: 5px 10px 5px;
}
.secundary-info {
  display: flex;
}
.icons {
  margin-top: 3em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
}
.nutrition-facts-details {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  color: #6c757d;
}
.nutrition-facts-details h6 {
  font-size: 0.7em;
}
.nutrition-facts-details h6 span {
  font-weight: bold;
  color: #42a3b8;
}
.fas {
  font-size: 1.7em;
  color: #42a3b8;
  border-radius: 50%;
  padding: 10px;
}
.fas:nth-child(2) {
  color: #f9c132;
}
.fas:nth-child(3) {
  color: #6c757d;
}
</style>
