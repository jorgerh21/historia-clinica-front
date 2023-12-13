<script>
import { ref, computed } from 'vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import NotFound from './components/NotFound.vue'
import axios from 'axios'

export default {
  methods: {
    checkLogin(){
	var login = this.$cookies.get('login');
	return login;
	},
    // Log out with Userfront.logout()
    handleLogout() {
	this.$cookies.remove('login');
	this.$cookies.remove('appToken');	
	this.$cookies.remove('tipoUsuario');
	this.$router.push('/login');
      console.log("test 1");
    }
  },
  computed: {
    // User is logged out if they don't have an access token
    isLoggedOut() {
      console.log("test 2");
    }
  }
};
</script>

<template>
  <div class="row">
    <div class="col-12">
        <div id="nav">
           <router-link to="/">Home</router-link> |
	  <div v-if="checkLogin">
      <router-link to="/login">Login</router-link>|
      <router-link to="/register">Register</router-link>|
	   </div>
	  <router-link to="/about">About</router-link>
	  <button @click="handleLogout">Close sesion</button>
        </div>
    </div>

    <div class="col-12 bg-light">
        <router-view />
    </div>
</div>
</template>