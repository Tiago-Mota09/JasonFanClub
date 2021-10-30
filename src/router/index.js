import Vue from "vue";
import Router from "vue-router";
import Login from "@/pages/Login";
import Cadastro from "@/pages/Cadastro";
import Welcome from "@/pages/Welcome";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/cadastro",
      name: "cadastro",
      component: Cadastro,
    },
    {
      path: "/welcome",
      name: "welcome",
      component: Welcome,
    }
  ],
});
