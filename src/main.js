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
import login from "./pages/login.vue"

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
    path: "/profile",
    component: ProfilePage,
  },
  {
    path: "/admin",
    component: AdminDash,
  },
  {
    path: "/ownerDashboard",
    component: OwnerDash,
  },
  {
    path: "/confirmpayment",
    component: ConfirmPayment,
  },
  {
    path: "/login",
    component: login,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
