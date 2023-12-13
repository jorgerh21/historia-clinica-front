import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Medico from '../components/Medico.vue'
import Paciente from '../components/Paciente.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/medico",
    name: "Medico",
    component: Medico,
  },
  {
    path: "/paciente",
    name: "Paciente",
    component: Paciente,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;