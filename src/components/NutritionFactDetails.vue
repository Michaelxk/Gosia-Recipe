<template>
  <div class="container-fluid">
    <div class="recipe-title">
      <h5 class="title text-center mb-5">
        {{ this.recipeInformation.title }}
      </h5>
    </div>

    <section class="nutrition-facts">
      <div class="icons">
        <i class="fas fa-seedling"></i>
        <i class="fas fa-bread-slice"></i>
        <i class="fas fa-percent"></i>
      </div>

      <div class="nutrition-facts-details mt-2 mb-5 ">
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
    </section>
    <h6 class="ingradients-title">Ingredients:</h6>

    <div class="ingredients-list mb-5">
      <ul>
        <li>aslfkajsfsal</li>
        <li>aslfkajsfsal</li>
        <li>aslfkajsfsal</li>
      </ul>
    </div>

    <div class="preparation">
      <h6 class="ingradients-title">Preparation:</h6>
      <div class="instruction-content">
        <p class="instruction">
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

    <section class="nutrition-facts-secondary mb-5">
      <div class="container-fluid">
        <h5 class="title mb-5 mt-5">Nutrition Facts:</h5>
        <div class="notice notice-success">
          <strong>Vegan:</strong> {{ this.recipeInformation.vegan }}
        </div>
        <div class="notice notice-info">
          <strong>Is a popular Recipe ?</strong>
          {{ this.recipeInformation.veryPopular }}
        </div>
        <div class="notice notice-warning">
          <strong>Very Healthy:</strong>
          {{ this.recipeInformation.veryHealthy }}
        </div>
      </div>
    </section>
    <!-- <div class="sumary">
      <p>{{ this.recipeInformation.summary }}</p>
    </div> -->
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
  padding: 5px 5px;
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
  font-size: 0.6em;
}
.nutrition-facts-details h6 span {
  font-weight: bold;
  color: #42a3b8;
}
.fas {
  font-size: 1.5em;
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
.instruction {
  font-size: 1em;
}

.notice {
  padding: 15px;
  background-color: #fafafa;
  border-left: 6px solid #7f7f84;
  margin-bottom: 10px;
  -webkit-box-shadow: 0 5px 8px -6px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 5px 8px -6px rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 8px -6px rgba(0, 0, 0, 0.2);
}
.notice-sm {
  padding: 10px;
  font-size: 80%;
}
.notice-lg {
  padding: 35px;
  font-size: large;
}
.notice-success {
  border-color: #80d651;
}
.notice-success > strong {
  color: #80d651;
}
.notice-info {
  border-color: #45abcd;
}
.notice-info > strong {
  color: #45abcd;
}
.notice-warning {
  border-color: #feaf20;
}
.notice-warning > strong {
  color: #feaf20;
}
.notice-danger {
  border-color: #d73814;
}
.notice-danger > strong {
  color: #d73814;
}
</style>
