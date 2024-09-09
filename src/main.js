import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import "./assets/tailwind.css";

import HomePage from "./pages/HomePage.vue";
import CarsPage from "./pages/CarsPage.vue";
import CarPage from "./pages/CarPage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ProfilePage from "./pages/ProfilePage.vue";
import CheckoutPage from "./pages/CheckoutPage.vue";
import AdminDash from "./pages/AdminDash.vue";
import OwnerDash from "./pages/OwnerDash.vue";
import ConfirmPayment from "./pages/ConfirmPayment.vue";
import AdminLogin from "./pages/AdminLogin.vue";

import store from "./store";
import ErrorPage from "./pages/ErrorPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/cars",
    component: CarsPage,
  },
  {
    path: "/cars/:id",
    component: CarPage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/checkout",
    component: CheckoutPage,
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
    beforeEnter(to,from,next){
      const savedUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
      if(!savedUser){
        next('/adminlogin');
      }
      else{
        next();
      }
    }
  },
  {
    path: "/adminlogin",
    component: AdminLogin,
    meta: {
      hideNavFoot: true,
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
  },

  { path: "/:pathMatch(.*)*", component: ErrorPage, alias: "/error" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(store).use(router).mount("#app");
