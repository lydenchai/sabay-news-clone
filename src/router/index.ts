import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EntertainmentView from "../views/EntertainmentView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/entertainment",
      name: "Entertainment",
      component: EntertainmentView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${to.name}`;
  next();
});

export default router;
