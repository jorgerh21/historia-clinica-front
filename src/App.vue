<script setup>
import { ref, computed } from 'vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import NotFound from './components/NotFound.vue'
import axios from 'axios'


const routes = {
  '/': Home,
  '/login': Login,
  '/register': Register
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <a href="#/">Home</a> |
  <a href="#/login">Login</a> |
  <a href="#/register">Register</a> |
  <a href="#/non-existent-path">Broken Link</a>
  <component :is="currentView" />
</template>