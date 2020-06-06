<template>
  <div class="navbar-content">
    <nav class="navbar navbar-expand-lg navbar-light bg-warning" role="navigation">
      <a class="navbar-brand" href="#" @click="goHome()">Eat-Smart</a>
      <!-- <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>-->
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <router-link :to="{ name: 'home' }">
            <span class="nav-title">Home</span>
          </router-link>
          <router-link :to="{ name: 'Index' }">
            <span class="nav-title">My Recipes</span>
          </router-link>
          <router-link :to="{ name: 'MyRecipe' }">
            <span class="nav-title">Add Recipes</span>
          </router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  data() {
    return {};
  },
  methods: {
    goHome() {
      this.$router.push({ name: 'home' });
    }
  }
};
</script>
<style lang="scss" scoped>
nav {
  -webkit-box-shadow: 2px 13px 18px -14px rgba(0, 0, 0, 1);
  -moz-box-shadow: 2px 13px 18px -14px rgba(0, 0, 0, 1);
  box-shadow: 2px 13px 18px -14px rgba(0, 0, 0, 1);
}
.navbar-brand {
  font-weight: bold;
}
.navbar-brand:hover {
  color: #fff;
}
</style>
