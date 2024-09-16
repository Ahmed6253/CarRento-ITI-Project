<template>
  <div class="lg:flex hidden">
    <nav
      class="h-[100vh] sticky top-0 left-0"
      :class="
        fold
          ? 'custom-shadow rounded-e-3xl w-[120px] min-h-screen bg-white transition-all'
          : 'custom-shadow rounded-e-3xl w-1/4 min-h-screen bg-white transition-all'
      "
    >
      <div class="flex justify-between py-6 px-10">
        <router-link to="/">
          <img v-if="!fold" :src="logo" alt="" />
        </router-link>
        <router-link to="/">
          <img v-if="fold" :src="logoHalf" alt="" />
        </router-link>

        <svg
          :class="fold ? 'hidden' : 'cursor-pointer'"
          @click="
            fold = !fold;
            foldCliked = !foldCliked;
          "
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="navigate_before">
            <path
              id="icon"
              d="M15.705 7.41L14.295 6L8.29498 12L14.295 18L15.705 16.59L11.125 12L15.705 7.41Z"
              class="fill-primary_color"
            />
          </g>
        </svg>
      </div>
      <hr />
      <div
        @click="if (fold) fold = !fold;"
        class="flex flex-col justify-between h-[85%] py-6 px-10"
      >
        <div class="flex flex-col gap-y-6">
          <div
            @click="activeSection = 'overview'"
            :class="
              activeSection == 'overview'
                ? 'activeSection'
                : 'flex gap-x-4 p-[10px] rounded-lg text-primary_color hover:bg-card_hover cursor-pointer'
            "
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.81261 11.0961C9.90765 11.0412 9.98656 10.9623 10.0414 10.8673C10.0963 10.7722 10.1251 10.6644 10.1251 10.5547V4.92969C10.1246 4.83004 10.1002 4.73198 10.054 4.64367C10.0079 4.55536 9.94126 4.47936 9.85976 4.42202C9.77826 4.36469 9.68424 4.32766 9.58553 4.31405C9.48681 4.30043 9.38628 4.31062 9.2923 4.34375C7.46807 4.98939 5.93396 6.26457 4.96575 7.94005C3.99755 9.61554 3.65875 11.5815 4.01027 13.4844C4.02849 13.5828 4.07008 13.6754 4.13153 13.7544C4.19298 13.8333 4.27249 13.8964 4.3634 13.9383C4.44531 13.9766 4.53468 13.9963 4.62511 13.9961C4.73481 13.9961 4.84259 13.9673 4.93761 13.9125L9.81261 11.0961ZM8.87511 5.87656V10.1937L5.13449 12.3523C5.12511 12.2344 5.12511 12.1156 5.12511 12C5.12622 10.7331 5.4769 9.49106 6.13855 8.41066C6.80019 7.33025 7.74713 6.45337 8.87511 5.87656ZM20.1251 12C20.1257 13.7837 19.5394 15.518 18.4565 16.9354C17.3737 18.3528 15.8545 19.3745 14.1334 19.8428C12.4122 20.3111 10.5848 20.2 8.9331 19.5267C7.28137 18.8534 5.8971 17.6553 4.99386 16.1172C4.95176 16.0461 4.92415 15.9675 4.91263 15.8857C4.90112 15.8039 4.90592 15.7207 4.92677 15.6407C4.94762 15.5608 4.9841 15.4859 5.0341 15.4201C5.0841 15.3544 5.14664 15.2992 5.21808 15.2578L11.3751 11.6742V4.5C11.3751 4.33424 11.441 4.17527 11.5582 4.05806C11.6754 3.94085 11.8344 3.875 12.0001 3.875C13.418 3.87572 14.811 4.24729 16.0409 4.95282C17.2707 5.65834 18.2947 6.67328 19.0111 7.89688C19.0196 7.90938 19.0275 7.92188 19.0353 7.93516C19.0431 7.94844 19.0509 7.96406 19.0579 7.97812C19.759 9.20247 20.1269 10.5892 20.1251 12Z"
                :class="
                  activeSection === 'overview'
                    ? 'fill-white'
                    : 'fill-primary_color'
                "
              />
            </svg>
            <p :class="fold ? 'hidden' : 'block'">Overview</p>
          </div>
          <div
            @click="activeSection = 'users'"
            :class="
              activeSection == 'users'
                ? 'activeSection'
                : 'flex gap-x-4 p-[10px] rounded-lg text-primary_color hover:bg-card_hover cursor-pointer'
            "
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                :class="
                  activeSection === 'users'
                    ? 'fill-white'
                    : 'fill-primary_color'
                "
              />
            </svg>
            <p :class="fold ? 'hidden' : 'block'">Users</p>
          </div>
        </div>
        <div class="flex flex-col gap-y-6">
          <div
            @click="logOut()"
            class="flex gap-x-4 p-[10px] rounded-lg hover:bg-card_hover cursor-pointer"
          >
            <img src="../assets/ownerDashImges/logOut.svg" alt="" />
            <p :class="fold ? 'hidden' : 'text-primary_color'">Log out</p>
          </div>
          <label class="switch self-end" v-if="!fold">
            <input type="checkbox" @click="toggleDarkMode" v-model="dark" />
            <span class="slider"></span>
          </label>
        </div>
      </div>
    </nav>
    <section class="mt-9 mx-5 w-full">
      <h1
        class="text-primary_color text-2xl mb-10"
        :class="fold ? 'ms-3' : 'ms-5'"
      >
        <span class="font-bold">Hello, </span>
        {{ userName }}
      </h1>
      <!-- <AdminOverview v-if="activeSection === 'overview'" /> -->

      <DashChart v-if="activeSection === 'overview'" class="mx-0 w-full px-0" />
      <DashUsers v-if="activeSection === 'users'" class="mx-0 w-full px-0" />
    </section>
  </div>
  <div
    class="flex flex-col items-center lg:hidden gap-10 font-semibold text-lg"
  >
    <img class="w-1/2" src="../assets/error.png" alt="" />

    <h2 class="text-center">
      This dashboard won't be accessible with this screen size you need to use
      larger screen!
    </h2>
  </div>
</template>

<script>
import DashChart from "@/components/DashChart.vue";
import DashUsers from "@/components/DashUsers.vue";
export default {
  name: "AdminDash",
  components: {
    DashChart,
    DashUsers,
  },
  created() {
    if (localStorage.getItem("darkMode") === "true") {
      this.dark = true;
      this.logo = require("../assets/logoDark.svg");
      this.logoHalf = require("../assets/logoHalfDark.svg");
    } else {
      this.dark = false;
      this.logo = require("../assets/logo.svg");
      this.logoHalf = require("../assets/logoHalf.svg");
    }
  },

  updated() {
    if (localStorage.getItem("darkMode") === "true") {
      this.dark = true;
      this.logo = require("../assets/logoDark.svg");
      this.logoHalf = require("../assets/logoHalfDark.svg");
    } else {
      this.dark = false;
      this.logo = require("../assets/logo.svg");
      this.logoHalf = require("../assets/logoHalf.svg");
    }
  },

  data() {
    const savedAdmin =
      JSON.parse(localStorage.getItem("currentAdmin")) ||
      JSON.parse(sessionStorage.getItem("currentAdmin"));
    return {
      fold: false,
      activeSection: "overview",
      userName: savedAdmin ? savedAdmin.name : "Guest", // Default to "Guest" if no data
      dark: false,
      logo: "",
      logoHalf: "",
    };
  },

  methods: {
    toggleDarkMode() {
      this.dark = !this.dark;
      if (this.dark) {
        localStorage.setItem("darkMode", "true");
        document.body.classList.add("dark");
        document.body.classList.remove("light");
      } else {
        localStorage.setItem("darkMode", "false");
        document.body.classList.remove("dark");
        document.body.classList.add("light");
      }
    },
    logout() {
      const logoutConfirm = confirm("Are you sure you want to log out?");
      if (logoutConfirm) {
        localStorage.removeItem("currentAdmin");
        sessionStorage.removeItem("currentAdmin");
        this.$router.push("/adminlogin");
      } else {
        return;
      }
    },
  },
};
</script>

<style>
.switch {
  display: block;
  --width-of-switch: 3.5em;
  --height-of-switch: 2em;
  /* size of sliding icon -- sun and moon */
  --size-of-icon: 1.4em;
  /* it is like a inline-padding of switch */
  --slider-offset: 0.3em;
  position: relative;
  width: var(--width-of-switch);
  height: var(--height-of-switch);
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #e0e0e2;
  transition: 0.4s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: "";
  height: var(--size-of-icon, 1.4em);
  width: var(--size-of-icon, 1.4em);
  border-radius: 20px;
  left: var(--slider-offset, 0.3em);
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #303136;
}

input:checked + .slider:before {
  left: calc(100% - (var(--size-of-icon, 1.4em) + var(--slider-offset, 0.3em)));
  background: #303136;
  /* change the value of second inset in box-shadow to change the angle and direction of the moon  */
  box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb;
}
</style>
