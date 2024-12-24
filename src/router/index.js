import { createRouter, createWebHistory } from "vue-router";
import MenuPage from "@/components/MenuPage.vue"; // Adjust the path if needed
import HomePage from "@/components/HomePage.vue"; // Your homepage component

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage, // Your homepage component
  },
  {
    path: "/start-order",
    name: "MenuPage",
    component: MenuPage,
  },
  // Add other routes as needed
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
