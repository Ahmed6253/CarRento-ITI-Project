<template>
  <div class="bg-bg_color">
    <NavBar
      v-if="!$route.meta.hideNavFoot"
      class="fixed w-[90%] z-40 right-1/2 translate-x-1/2"
    ></NavBar>
    <router-view></router-view>
    <login v-if="$store.state.isModalOpen"></login>
    <FooterComp v-if="!$route.meta.hideNavFoot"></FooterComp>
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
    login,
  },
  created() {
    this.$store.dispatch("setInOrOut");
    const theme = localStorage.getItem("darkMode");
    if (theme === "true") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  },
};
</script>
<style scoped></style>
