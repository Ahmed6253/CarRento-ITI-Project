<template>
  <div class="hidden lg:flex">
    <nav
      :class="
        fold
          ? 'custom-shadow rounded-e-3xl w-[120px] h-screen transition-all sticky top-0 bg-white'
          : 'custom-shadow rounded-e-3xl w-1/4 h-screen transition-all sticky top-0 bg-white'
      "
    >
      <div class="flex justify-between py-6 px-10">
        <img
          v-if="!fold"
          :src="logo"
          alt=""
          @click="$router.push('/')"
          class="cursor-pointer"
        />
        <img
          v-if="fold"
          :src="logoHalf"
          alt=""
          @click="$router.push('/')"
          class="cursor-pointer"
        />

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
                : 'flex gap-x-4 p-[10px] text-primary_color rounded-lg hover:bg-card_hover cursor-pointer'
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
            @click="activeSection = 'orders'"
            :class="
              activeSection == 'orders'
                ? 'activeSection'
                : 'flex gap-x-4 p-[10px] text-primary_color rounded-lg hover:bg-card_hover cursor-pointer'
            "
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="vuesax/bold/bag">
                <g id="bag">
                  <path
                    id="Vector"
                    d="M19.24 5.58006H18.84L15.46 2.20006C15.19 1.93006 14.75 1.93006 14.47 2.20006C14.2 2.47006 14.2 2.91006 14.47 3.19006L16.86 5.58006H7.14L9.53 3.19006C9.8 2.92006 9.8 2.48006 9.53 2.20006C9.26 1.93006 8.82 1.93006 8.54 2.20006L5.17 5.58006H4.77C3.87 5.58006 2 5.58006 2 8.14006C2 9.11006 2.2 9.75006 2.62 10.1701C2.86 10.4201 3.15 10.5501 3.46 10.6201C3.75 10.6901 4.06 10.7001 4.36 10.7001H19.64C19.95 10.7001 20.24 10.6801 20.52 10.6201C21.36 10.4201 22 9.82006 22 8.14006C22 5.58006 20.13 5.58006 19.24 5.58006Z"
                    :class="
                      activeSection === 'orders'
                        ? 'fill-white'
                        : 'fill-primary_color'
                    "
                  />
                  <path
                    id="Vector_2"
                    d="M19.05 12H4.87C4.25 12 3.78 12.55 3.88 13.16L4.72 18.3C5 20.02 5.75 22 9.08 22H14.69C18.06 22 18.66 20.31 19.02 18.42L20.03 13.19C20.15 12.57 19.68 12 19.05 12ZM10.61 18.45C10.61 18.84 10.3 19.15 9.92 19.15C9.53 19.15 9.22 18.84 9.22 18.45V15.15C9.22 14.77 9.53 14.45 9.92 14.45C10.3 14.45 10.61 14.77 10.61 15.15V18.45ZM14.89 18.45C14.89 18.84 14.58 19.15 14.19 19.15C13.81 19.15 13.49 18.84 13.49 18.45V15.15C13.49 14.77 13.81 14.45 14.19 14.45C14.58 14.45 14.89 14.77 14.89 15.15V18.45Z"
                    :class="
                      activeSection === 'orders'
                        ? 'fill-white'
                        : 'fill-primary_color'
                    "
                  />
                </g>
              </g>
            </svg>
            <p :class="fold ? 'hidden' : 'block'">Orders</p>
          </div>
          <div
            @click="activeSection = 'cars'"
            :class="
              activeSection == 'cars'
                ? 'activeSection'
                : 'flex gap-x-4 p-[10px] text-primary_color rounded-lg hover:bg-card_hover cursor-pointer'
            "
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="vuesax/bold/car">
                <g id="car">
                  <path
                    id="Vector"
                    d="M21.75 8.00008C21.75 8.41008 21.41 8.75008 21 8.75008H3C2.59 8.75008 2.25 8.41008 2.25 8.00008C2.25 7.59008 2.59 7.25008 3 7.25008H4.02L4.4 5.44008C4.76 3.69008 5.51 2.08008 8.49 2.08008H15.51C18.49 2.08008 19.24 3.69008 19.6 5.44008L19.98 7.25008H21C21.41 7.25008 21.75 7.59008 21.75 8.00008Z"
                    :class="
                      activeSection === 'cars'
                        ? 'fill-white'
                        : 'fill-primary_color'
                    "
                  />
                  <path
                    id="Vector_2"
                    d="M22.18 13.66C22.03 12.01 21.59 10.25 18.38 10.25H5.61999C2.40999 10.25 1.97999 12.01 1.81999 13.66L1.25999 19.75C1.18999 20.51 1.43999 21.27 1.95999 21.84C2.48999 22.42 3.23999 22.75 4.03999 22.75H5.91999C7.53999 22.75 7.84999 21.82 8.04999 21.21L8.24999 20.61C8.47999 19.92 8.53999 19.75 9.43999 19.75H14.56C15.46 19.75 15.49 19.85 15.75 20.61L15.95 21.21C16.15 21.82 16.46 22.75 18.08 22.75H19.96C20.75 22.75 21.51 22.42 22.04 21.84C22.56 21.27 22.81 20.51 22.74 19.75L22.18 13.66ZM8.99999 15.75H5.99999C5.58999 15.75 5.24999 15.41 5.24999 15C5.24999 14.59 5.58999 14.25 5.99999 14.25H8.99999C9.40999 14.25 9.74999 14.59 9.74999 15C9.74999 15.41 9.40999 15.75 8.99999 15.75ZM18 15.75H15C14.59 15.75 14.25 15.41 14.25 15C14.25 14.59 14.59 14.25 15 14.25H18C18.41 14.25 18.75 14.59 18.75 15C18.75 15.41 18.41 15.75 18 15.75Z"
                    :class="
                      activeSection === 'cars'
                        ? 'fill-white'
                        : 'fill-primary_color'
                    "
                  />
                </g>
              </g>
            </svg>
            <p :class="fold ? 'hidden' : 'block'">My Cars</p>
          </div>
        </div>
        <div
          @click="logOut()"
          class="flex gap-x-4 p-[10px] rounded-lg hover:bg-card_hover cursor-pointer"
        >
          <img src="../assets/ownerDashImges/logOut.svg" alt="" />
          <p :class="fold ? 'hidden' : 'text-primary_color'">Log out</p>
        </div>
      </div>
    </nav>

    <section class="mx-5 mt-10 w-full">
      <h1 class="text-primary_color text-2xl mb-10">
        <span class="font-bold">Hello, </span>
        {{ currUser.userName }}
      </h1>
      <OwnerCars v-if="activeSection === 'cars'" :id="currUser.id" />
      <OwnerOrders v-if="activeSection === 'orders'" :id="currUser.id" />
      <OwnerOverview v-if="activeSection === 'overview'" :id="currUser.id" />
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
import OwnerCars from "@/components/OwnerCars.vue";
import OwnerOrders from "@/components/OwnerOrders.vue";
import OwnerOverview from "@/components/OwnerOverview.vue";

export default {
  name: "OwnerDash",
  components: {
    OwnerCars,
    OwnerOrders,
    OwnerOverview,
  },
  data() {
    return {
      fold: true,
      activeSection: "overview",
      currUser: "",
      logo: "",
      logoHalf: "",
    };
  },
  created() {
    this.currUser =
      JSON.parse(localStorage.getItem("currentUser")) ||
      JSON.parse(sessionStorage.getItem("currentUser"));
    if (localStorage.getItem("darkMode") === "true") {
      this.logo = require("../assets/logoDark.svg");
      this.logoHalf = require("../assets/logoHalfDark.svg");
    } else {
      this.logo = require("../assets/logo.svg");
      this.logoHalf = require("../assets/logoHalf.svg");
    }
  },
  methods: {
    logOut() {
      const logoutConfirm = confirm("Are you sure you want to log out?");

      if (logoutConfirm) {
        localStorage.removeItem("currentUser");
        sessionStorage.removeItem("currentUser");
        this.$store.dispatch("setInOrOut");
        this.$router.push("/");
      } else {
        return;
      }
    },
  },
};
</script>
