<template>
  <!-- navbar start -->

  <nav class="border-gray-200">
    <div
      class="py-4 md:py-0 md:h-20 flex flex-wrap px-8 items-center justify-between rounded-lg md:rounded-full custom-shadow mt-6 bg-white opacity-90"
    >
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <router-link to="/">
          <img
            src="../imagesNavfoot/logo.png"
            class="h-8"
            alt="Flowbite Logo"
          />
        </router-link>
      </a>
      <div
        class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-3"
      >
        <!-- login button -->
        <button
          type="button"
          class="px-8 py-3 bg-primary_color hidden lg:block text-white rounded-full"
          @click="openModal"
        >
          {{ logedIn ? "Logout" : "Login" }}
        </button>
        <!-- user picture  -->
        <a
          @click="showProfile()"
          type="button"
          class="bg-gray-800 hidden md:block rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        >
          <img
            class="rounded-full"
            src="../imagesNavfoot/User.png"
            alt="user photo"
          />
        </a>
        <!-- Dropdown menu -->
        <button
          @click="showMenu = !showMenu"
          data-collapse-toggle="navbar-user"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:mt-0 md:border-0 dark:border-gray-700"
        >
          <li>
            <router-link
              to="/"
              class="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-gray-300 md:hover:text-white md:px-8 md:py-7"
              active-class=" text-white bg-primary_color rounded md:bg-transparent md:text-primary_color md:border-b-2 md:border-primary_color md:p-0 md:rounded-none md:px-8 md:py-7 box-border"
              aria-current="page"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/cars"
              href="/cars"
              class="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-gray-300 md:hover:text-white md:px-8 md:py-7"
              active-class=" text-white bg-primary_color rounded md:bg-transparent md:text-primary_color md:border-b-2 md:border-primary_color md:p-0 md:rounded-none md:px-8 md:py-7 box-border"
              >Cars</router-link
            >
          </li>
          <li>
            <router-link
              to="/about"
              class="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-gray-300 md:hover:text-white md:px-8 md:py-7"
              active-class=" text-white bg-primary_color rounded md:bg-transparent md:text-primary_color md:border-b-2 md:border-primary_color md:p-0 md:rounded-none md:px-8 md:py-7 box-border"
              >About</router-link
            >
          </li>
          <li>
            <a
              class="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:bg-gray-300 md:hidden md:hover:text-white md:px-8 md:py-8"
              @click="openModal"
              >{{ logedIn ? "Logout" : "Login" }}</a
            >
          </li>
          <li>
            <a
              @click="showProfile()"
              class="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:bg-gray-300 md:hidden md:hover:text-white md:px-8 md:py-8"
              >Profile</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- navbar end -->
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "NavBar",
  data() {
    return {
      showMenu: false,
    };
  },
  computed: {
    ...mapState(["isModalOpen", "logedIn"]),
  },

  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    openModal() {
      if (this.logedIn) {
        localStorage.removeItem("currentUser");
        sessionStorage.removeItem("currentUser");
        this.setInOrOut();
        this.$router.push("/");
      } else {
        this.$store.dispatch("openModal");
      }
    },
    setInOrOut() {
      this.$store.dispatch("setInOrOut");
    },
    showProfile() {
      if (!this.logedIn) {
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
