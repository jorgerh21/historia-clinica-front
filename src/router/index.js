import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Medico from '../components/Medico.vue'
import Paciente from '../components/Paciente.vue'
import Password from '../components/Password.vue'
import Historia from '../components/Historia.vue'
import Configuracion from '../components/Configuracion.vue'

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
  {
    path: "/historia",
    name: "Historia",
    component: Historia,
  },
  {
    path: "/configuracion",
    name: "Configuracion",
    component: Configuracion,
  },
  {
    path: "/password",
    name: "Password",
    component: Password,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;