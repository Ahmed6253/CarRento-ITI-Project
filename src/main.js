import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import "./assets/tailwind.css";
import HomePage from "./pages/HomePage.vue";
import CarsPage from "./pages/CarsPage.vue";
import CarPage from "./pages/CarsPage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ProfilePage from "./pages/ProfilePage.vue";
import AdminDash from "./pages/AdminDash.vue";
import OwnerDash from "./pages/OwnerDash.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
