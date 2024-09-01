<template>
  <div class="bg-split-half pt-4 px-0"><NavBar class="mt-4"></NavBar></div>
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
