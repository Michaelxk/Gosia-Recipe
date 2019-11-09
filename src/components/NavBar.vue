<template>
  <div class="navbar-content">
    <nav class="navbar navbar-expand-lg navbar-light bg-warning" role="navigation">
      <a class="navbar-brand" href="#">Eat-Smart</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">My Recipes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" tabindex="-1">Add Recipe</a>
          </li>
        </ul>
       </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
nav {
-webkit-box-shadow: 2px 13px 18px -14px rgba(0,0,0,1);
-moz-box-shadow: 2px 13px 18px -14px rgba(0,0,0,1);
box-shadow: 2px 13px 18px -14px rgba(0,0,0,1);
}
</style>
