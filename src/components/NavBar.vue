<template>
  <div class="navbar-content">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-warning"
      role="navigation"
    >
      <a class="navbar-brand" href="#" @click="goHome()">Eat-Smart</a>
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
.navbar {
  color: #fff;
}
</style>
