<template>
  <div id="app">
    <NavBar />

    <router-view />
    <Footer class="footer" />
  </div>
</template>
<script>
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: { NavBar, Footer }
};
</script>
