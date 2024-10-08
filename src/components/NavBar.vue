<template>
  <nav class="text-primary_color pt-4">
    <div
      class="py-4 md:py-0 md:h-20 flex flex-wrap px-8 items-center justify-between rounded-lg md:rounded-full custom-shadow bg-white opacity-90"
    >
      <div class="flex justify-start gap-3">
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <router-link to="/">
            <img :src="logo" alt="" />
          </router-link>
        </a>
        <details class="dropdown" ref="dropdown">
          <summary class="m-1 hidden md:btn">
            {{ locale }}
            <img
              src="../assets/globe.png"
              alt="language"
              class="lg:inline-block hidden"
            />
          </summary>
          <ul
            class="menu dropdown-content bg-base-100 rounded-box z-[1] p-2 shadow"
          >
            <li>
              <button
                :class="{
                  'font-bold': locale === 'En',
                  'font-light': locale === 'Ar',
                }"
                @click="setEn"
              >
                En <img src="../assets/En.png" alt="english" />
              </button>
            </li>
            <li>
              <button
                :class="{
                  'font-bold': locale === 'Ar',
                  'font-light': locale === 'En',
                }"
                @click="setAr"
              >
                Ar <img src="../assets/Ar.png" alt="arabic" />
              </button>
            </li>
          </ul>
        </details>
      </div>

      <div
        class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-3"
      >
        <label class="switch">
          <input type="checkbox" @click="toggleDarkMode" v-model="dark" />
          <span class="slider"></span>
        </label>

        <button
          type="button"
          class="px-8 py-3 bg-primary_color hidden lg:block text-white font-medium rounded-full"
          @click="openModal"
        >
          {{ loggedIn ? $t("nav.logout") : $t("nav.login") }}
        </button>

        <a
          @click="showProfile()"
          type="button"
          class="bg-gray-800 hidden md:block rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 cursor-pointer"
        >
          <img
            class="rounded-full w-14"
            src="../imagesNavfoot/User.svg"
            alt="user photo"
          />
        </a>

        <!-- Hamburger menu button -->
        <button
          @click="showMenu = !showMenu"
          data-collapse-toggle="navbar-user"
          type="button"
          :class="
            showMenu
              ? 'hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600  inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden'
              : 'inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden'
          "
        >
          <img src="../imagesNavfoot/menu.png" alt="" />
        </button>
      </div>

      <div
        class="items-center justify-between w-full md:flex md:w-auto md:order-1"
        :class="showMenu ? 'block' : 'hidden'"
        id="navbar-user"
      >
        <ul
          @click="showMenu = !showMenu"
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-border_color rounded-lg md:flex-row md:mt-0 md:border-0 dark:border-gray-700"
        >
          <li>
            <router-link
              to="/"
              active-class="border-b-2 border-Placeholder_color"
              class="block py-2 px-3 text-primary_color hover:bg-gray-100 md:hover:bg-gray-300 md:hover:text-white md:px-8 md:py-7"
              >{{ $t("nav.home") }}</router-link
            >
          </li>
          <li>
            <router-link
              to="/cars"
              active-class="border-b-2 border-Placeholder_color"
              class="block py-2 px-3 text-primary_color hover:bg-gray-100 md:hover:bg-gray-300 md:hover:text-white md:px-8 md:py-7"
              >{{ $t("nav.cars") }}</router-link
            >
          </li>
          <li>
            <router-link
              to="/about"
              active-class="border-b-2 border-Placeholder_color"
              class="block py-2 px-3 text-primary_color hover:bg-gray-100 md:hover:bg-gray-300 md:hover:text-white md:px-8 md:py-7"
              >{{ $t("nav.about") }}</router-link
            >
          </li>
          <li class="md:hidden">
            <button
              @click="showProfile()"
              class="block py-2 px-3 text-primary_color hover:bg-gray-100 md:hover:bg-gray-300 md:hover:text-white md:px-8 md:py-7"
            >
              {{ $t("nav.profile") }}
            </button>
          </li>

          <!-- Add the language selection dropdown here for smaller screens -->

          <li>
            <a
              class="block py-2 px-3 text-primary_color hover:bg-gray-100 md:hidden"
              @click="openModal"
              >{{ loggedIn ? $t("nav.logout") : $t("nav.login") }}</a
            >
          </li>

          <li class="md:hidden ps-3 pt-2">
            <button
              :class="{
                'font-bold': locale === 'En',
                'font-light': locale === 'Ar',
              }"
              @click="setEn"
            >
              En
            </button>
            <span> / </span>
            <button
              :class="{
                'font-bold': locale === 'Ar',
                'font-light': locale === 'En',
              }"
              @click="setAr"
            >
              Ar
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NavBar",

  data() {
    return {
      showMenu: false,
      dark: false,
      logo: "",
      locale: "En",
    };
  },
  computed: {
    ...mapState(["isModalOpen", "loggedIn"]),
  },

  created() {
    this.showMenu = false;
    if (localStorage.getItem("darkMode") === "true") {
      this.dark = true;
    } else {
      this.dark = false;
    }
    if (localStorage.getItem("darkMode") === "true") {
      this.logo = require("../assets/logoDark.svg");
    } else {
      this.logo = require("../assets/logo.svg");
    }
    this.locale = localStorage.getItem("lang") || "En";

    document.documentElement.dir = this.locale === "En" ? "ltr" : "rtl";
  },

  updated() {
    if (localStorage.getItem("darkMode") === "true") {
      this.logo = require("../assets/logoDark.svg");
    } else {
      this.logo = require("../assets/logo.svg");
    }
  },

  watch: {
    // Watch for locale changes
    locale(newLocale) {
      this.$i18n.locale = newLocale; // Update i18n locale when locale data changes
    },

    "$i18n.locale"(newLang) {
      document.documentElement.dir = newLang === "Ar" ? "rtl" : "ltr";
    },
  },

  methods: {
    setEn() {
      localStorage.setItem("lang", "En");
      this.locale = "En";
      this.$refs.dropdown.open = false;
    },

    setAr() {
      localStorage.setItem("lang", "Ar");
      this.locale = "Ar";
      this.$refs.dropdown.open = false;
    },

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
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    openModal() {
      if (this.loggedIn) {
        const logoutConfirm = confirm(this.$t("nav.logoutConfirm"));
        if (logoutConfirm) {
          localStorage.removeItem("currentUser");
          sessionStorage.removeItem("currentUser");
          this.setInOrOut();
          this.$router.push("/");
        } else {
          return;
        }
      } else {
        this.$store.dispatch("openModal");
      }
    },
    setInOrOut() {
      this.$store.dispatch("setInOrOut");
    },
    showProfile() {
      if (!this.loggedIn) {
        this.$store.dispatch("openModal");
      } else {
        const user =
          JSON.parse(localStorage.getItem("currentUser")) ||
          JSON.parse(sessionStorage.getItem("currentUser"));
        if (user.role === "owner") {
          this.$router.push(`/ownerDash/${user.id}`);
        } else {
          this.$router.push(`/profile/${user.id}`);
        }
      }
    },
  },
};
</script>

<style scoped>
/* From Uiverse.io by satyamchaudharydev */
/* The switch - the box around the slider */
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
