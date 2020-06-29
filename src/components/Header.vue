<template>
  <header role="header" class="header">
    <div class="jumbotron">
      <div class="container-info">
        <h2 class="title text-center">Gosia</h2>
        <h1 class="title text-center">Recipes</h1>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header'
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
</style>
