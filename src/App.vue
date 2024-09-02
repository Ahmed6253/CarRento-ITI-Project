<template>
  <div class="bg-bg_color pt-1"><NavBar></NavBar></div>
  <router-view></router-view>
  <FooterComp></FooterComp>
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
