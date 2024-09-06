<template>
  <div class="bg-bg_color">
    <NavBar v-if="!$route.meta.hideNavFoot" class="pt-1"></NavBar>
    <router-view></router-view>
    <FooterComp v-if="!$route.meta.hideNavFoot"></FooterComp>
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
