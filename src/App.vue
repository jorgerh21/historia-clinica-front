<script>
import { ref, computed } from 'vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import NotFound from './components/NotFound.vue'
import Historia from './components/Historia.vue'
import axios from 'axios'

export default {
  name: "App",
  data() {
    return {
      answers: {},
    };
  },
  methods: {
  getStart(){
  var login = this.$cookies.get("login");
    if(login=="true"){
      this.answers.login=true;
    }else{
      this.answers.login=false;
    }
  var tipo = this.$cookies.get('tipoUsuario');
  this.answers.tipo=tipo;
	},
  handleLogout() {
  this.$cookies.set("login",false);
	this.$cookies.remove('appToken');	
	this.$cookies.remove('tipoUsuario');
	this.$router.push('/login');
    }
  },
  computed: {
    isLoggedOut() {
      console.log("test 2");
    }
  },
  beforeMount() {
    this.getStart();
  },
};
</script>

<template>
  <div class="row">
    <div class="col-12">
        <div id="nav">
      <router-link to="/">Home</router-link> |
    <div v-if="answers.tipo == '1'">
	  <router-link to="/historia">Crear Historia</router-link> |
    </div>
    <div v-if="answers.login">
	  <router-link to="/configuracion">Configuracion</router-link> |
    </div>
	  <div v-if="!answers.login">
      <router-link to="/login">Login</router-link>|
      <router-link to="/register">Register</router-link>|
	  </div>
    <div v-if="answers.login">
	  <button @click="handleLogout">Close sesion</button>
    </div>
    </div>
    </div>

    <div class="col-12 bg-light">
        <router-view />
    </div>
</div>
</template>