<template>
  <div class="bg-bg_color">
    <div
      v-if="message"
      :class="
        message === 'Rejected' || message === 'Unverified'
          ? 'fixed w-full text-[9px] sm:text-[16px] items-center z-50 bg-red h-6 justify-center gap-1 text-slate-50 flex appear-disappear'
          : 'fixed w-full text-[9px] sm:text-[16px] items-center z-50 bg-green h-6 justify-center gap-1 text-slate-50 flex appear-disappear'
      "
    >
      <img src="./assets/notification.svg" />

      <p v-if="message === 'Rejected'">
        Your last request was rejected, contact support for more details.
      </p>
      <p v-if="message === 'Verified'">
        Congratulations, your account has been verified.
      </p>
      <p v-if="message === 'Accepted'">
        Your last request was accepted, don't forget to
        <span
          @click="$router.push(`/profile/${user.id}`)"
          class="font-medium underline cursor-pointer"
          >Rate Your Order</span
        >
      </p>
      <p v-if="message === 'Unverified'">
        Your verification was rejected,
        <span
          @click="$router.push(`/profile/${user.id}`)"
          class="font-medium underline cursor-pointer"
          >Try Again</span
        >
      </p>
    </div>
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
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    NavBar,
    FooterComp,
    login,
  },
  data() {
    return {
      message: "",
      user: "",
    };
  },
  computed: {
    ...mapState(["loggedIn"]),
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
  methods: {
    getMessage() {
      const user =
        JSON.parse(localStorage.getItem("currentUser")) ||
        JSON.parse(sessionStorage.getItem("currentUser"));

      this.user = user;
      if (this.user && this.user.role === "renter") {
        axios
          .get(
            `https://carrento-9ea05-default-rtdb.firebaseio.com/messages/${this.user.id}.json`
          )
          .then((response) => {
            if (response.data) {
              this.message = response.data.message;
            }
          })
          .then(() => {
            axios.delete(
              `https://carrento-9ea05-default-rtdb.firebaseio.com/messages/${this.user.id}.json`
            );
          });
      }
    },
  },

  updated() {
    if (this.loggedIn) {
      this.getMessage();
      if (this.message === "Verified" && localStorage.getItem("currentUser")) {
        localStorage.setItem(
          "currentUser",
          JSON.stringify({ ...this.user, status: "Verified" })
        );
      } else if (
        this.message === "Verified" &&
        sessionStorage.getItem("currentUser")
      ) {
        sessionStorage.setItem(
          "currentUser",
          JSON.stringify({ ...this.user, status: "Verified" })
        );
      }
    } else {
      this.message = "";
    }
  },
};
</script>
<style scoped>
.appear-disappear {
  animation-name: appear-disappear;
  animation-duration: 6s;
  animation-fill-mode: forwards;
}

@keyframes appear-disappear {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
  }
}
</style>
