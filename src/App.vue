<template>
  <NavBar
    v-if="!$route.meta.hideNavFoot"
    class="fixed w-[90%] z-40 right-1/2 translate-x-1/2"
  ></NavBar>
  <router-view></router-view>
  <login v-if="$store.state.isModalOpen"></login>
  <FooterComp v-if="!$route.meta.hideNavFoot"></FooterComp>
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
    login,
  },
  created() {
    this.$store.dispatch("setInOrOut");
  },
};
</script>
<style scoped></style>
