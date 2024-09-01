<template>
  <NavBar></NavBar>
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
    FooterComp

  },
 
};
</script>
<style scoped>


</style>
