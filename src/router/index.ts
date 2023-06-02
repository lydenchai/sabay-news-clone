import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EntertainmentView from "../views/EntertainmentView.vue";
import TechnologyView from "../views/TechnologyView.vue";
import LifeView from "../views/LifeView.vue";
import SportView from "../views/SportsView.vue";
import SeaGame2023View from "../views/SeaGame2023View.vue";
import AutoTalkView from "../views/AutoTalkView.vue";
import SmartAxiataView from "../views/SmartAxiataView.vue";
import DealView from "../views/DealsView.vue";
import StartingView from "../views/StartingView.vue";

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Sabay News",
      component: HomeView,
    },
    {
      path: "/entertainment",
      name: "Entertainment - Sabay News",
      component: EntertainmentView,
    },
    {
      path: "/technology",
      name: "Technology - Sabay News",
      component: TechnologyView,
    },
    {
      path: "/life",
      name: "Life - Sabay News",
      component: LifeView,
    },
    {
      path: "/sports",
      name: "Sports - Sabay News",
      component: SportView,
    },
    {
      path: "/sea-game-2023",
      name: "Sea game 2023 - Sabay News",
      component: SeaGame2023View,
    },
    {
      path: "/auto-talk",
      name: "Auto Talk - Sabay News",
      component: AutoTalkView,
    },
    {
      path: "/smart-axiata",
      name: "Smart Axiata - Sabay News",
      component: SmartAxiataView,
    },
    {
      path: "/deals",
      name: "Deals - Sabay News",
      component: DealView,
    },
    {
      path: "/starting-up",
      name: "Starting U - Sabay Newsp",
      component: StartingView,
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   document.title = `${to.name}`;
//   next();
// });

export default router;
