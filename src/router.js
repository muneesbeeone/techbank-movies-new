import { createRouter, createWebHistory  } from "vue-router";
import Home from "./views/Home.vue"; // Import your views/components
import Valipan from "./views/ValipanVue.vue";
import GoatLife from "./views/GoatLifeVue.vue";
import TwoEighteenVue from "./views/TwoEighteenVue.vue";
import Puzhu from "./views/Puzhu.vue";
import PrivacyPolicy from "./views/PrivacyPolicy.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/malaikottai-vaalipan",
    name: "Valipan",
    component: Valipan,
  },
  {
    path: "/the-goat-life",
    name: "Goat Life",
    component: GoatLife,
  },
  {
    path: "/2018",
    name: "2018View",
    component: TwoEighteenVue,
  },
  {
    path: "/puzhu",
    name: "Puzhu",
    component: Puzhu,
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
  },
  // Add more routes as needed
];


const router = createRouter({
  history: createWebHistory (process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }; // Scroll to the top of the page
  },
});

export default router;
