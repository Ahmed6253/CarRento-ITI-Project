<template>
  <div class="bg-bg_color">
    <NavBar class="pt-1 sticky top-0 z-100"></NavBar>
    <router-view></router-view>
    <FooterComp></FooterComp>
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import FooterComp from "./components/FooterComp.vue";
export default {
  name: "App",
  components: {
    NavBar,
    FooterComp,

  },
};
</script>
<style scoped></style>
