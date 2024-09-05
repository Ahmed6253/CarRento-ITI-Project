<template>
  <div class="bg-bg_color">
    <NavBar class="pt-1"></NavBar>
    <login/>
    <router-view></router-view>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterComp from "./components/FooterComp.vue";
import login from "./pages/login.vue";  
export default {
  name: "App",
  components: {
    NavBar,
    FooterComp,
    login
  },
};
</script>
<style scoped></style>
