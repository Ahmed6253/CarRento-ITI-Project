import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import "./assets/tailwind.css";

import { createI18n } from 'vue-i18n'
import En from './locale/en.json'
import Ar from './locale/ar.json'


import HomePage from "./pages/HomePage.vue";
import CarsPage from "./pages/CarsPage.vue";
import CarPage from "./pages/CarPage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ProfilePage from "./pages/ProfilePage.vue";
import CheckoutPage from "./pages/CheckoutPage.vue";
import AdminDash from "./pages/AdminDash.vue";
import OwnerDash from "./pages/OwnerDash.vue";
import ConfirmPayment from "./pages/ConfirmPayment.vue";
import PaymentFailed from "./components/PaymentFailed.vue";
import AdminLogin from "./pages/AdminLogin.vue";
import store from "./store";
import ErrorPage from "./pages/ErrorPage.vue";

const i18n = createI18n({
  locale: localStorage.getItem("lang") || "En",
  fallbackLocale: "En",
  messages:{
    En : En,
    Ar : Ar,
  }
})


const routes = [
  {
    path: "/",
    component: HomePage,
    name: "HomePage",
  },
  {
    path: "/cars",
    component: CarsPage,
    name: "CarsPage",
  },
  {
    path: "/cars/:id",
    component: CarPage,
    name: "CarPage",
    beforeEnter: (from, to, next) => {
      const location = sessionStorage.getItem("orderLocation");
      const pickUpDate = sessionStorage.getItem("orderPickUp");
      const dropOffDate = sessionStorage.getItem("orderDropOff");
      if (location && pickUpDate && dropOffDate) {
        next();
      } else {
        next("/error");
      }
    },
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/cars/checkout/:id",
    component: CheckoutPage,
    beforeEnter: (from, to, next) => {
      const user =
        JSON.parse(localStorage.getItem("currentUser")) ||
        JSON.parse(sessionStorage.getItem("currentUser"));

      const orderStatus = JSON.parse(sessionStorage.getItem("orderStatus"));
      if (
        user &&
        orderStatus === "checkout" &&
        user.role === "renter" &&
        user.status === "Verified"
      ) {
        next();
      } else {
        console.log(orderStatus);
        next("/error");
      }
    },
  },
  {
    path: "/profile/:id",
    component: ProfilePage,
    beforeEnter: (from, to, next) => {
      const user =
        JSON.parse(localStorage.getItem("currentUser")) ||
        JSON.parse(sessionStorage.getItem("currentUser"));
      if (user && user.role === "renter") {
        next();
      } else {
        next("/error");
        console.log("user not logged in");
      }
    },
  },
  {
    path: "/admin",
    component: AdminDash,
    meta: {
      hideNavFoot: true,
    },
    beforeEnter(from, to, next) {
      const savedAdmin =
        localStorage.getItem("currentAdmin") ||
        sessionStorage.getItem("currentAdmin");
      if (!savedAdmin) {
        next("/adminlogin");
      } else {
        next();
      }
    },
  },
  {
    path: "/adminlogin",
    component: AdminLogin,
    meta: {
      hideNavFoot: true,
    },

    beforeEnter(from, to, next) {
      const savedAdmin =
        localStorage.getItem("currentAdmin") ||
        sessionStorage.getItem("currentAdmin");
      if (savedAdmin) {
        next("/admin");
      } else {
        next();
      }
    },
  },
  {
    path: "/ownerdash/:id",
    component: OwnerDash,
    meta: {
      hideNavFoot: true,
    },
    beforeEnter: (from, to, next) => {
      const user =
        JSON.parse(localStorage.getItem("currentUser")) ||
        JSON.parse(sessionStorage.getItem("currentUser"));

      if (user && user.role === "owner") {
        next();
      } else {
        next("/error");
        console.log("user not logged in");
      }
    },
  },
  {
    path: "/confirmpayment",
    component: ConfirmPayment,
    beforeEnter: (from, to, next) => {
      const orderStatus = JSON.parse(sessionStorage.getItem("orderStatus"));
      if (orderStatus === "confirm") {
        next();
      } else {
        next("/error");
      }
    },
  },
  {
    path: "/cancel",
    component: PaymentFailed,
  },

  { path: "/:pathMatch(.*)*", component: ErrorPage, alias: "/error" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

createApp(App).use(store).use(router).use(i18n).mount("#app");
