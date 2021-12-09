import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Meet from "../views/Meet.vue";
import Board from "../views/Board.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/meet",
    name: "Meet",
    component: Meet,
  },
  {
    path: "/board",
    name: "Board",
    component: Board,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
