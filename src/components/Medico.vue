<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      answers: {},
    };
  },
  methods: {
    async getAnswer() {
	console.log(this.$cookies.get("login"));
	if(!this.$cookies.get("login")){
	   this.$router.push('/login');
	  }
	  
	  if(this.$cookies.get("tipoUsuario" ) == 1){
	   this.$router.push('/Medico');
	  }
	  
	  if(this.$cookies.get("tipoUsuario") == 2){
	   this.$router.push('/Paciente');
	  }

	  var appToken = this.$cookies.get("appToken");
	  console.log(appToken);
      const { data } = await axios.get("http://localhost:8000/api/historias", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + appToken
                }
            });
	  
      this.answers = data;
    },
  },
  beforeMount() {
    this.getAnswer();
  },
};
</script>

<template>

  <div class="greetings">
    <h1 class="green">Medicos</h1>
<p>
<div v-for="answer in answers"
        active-class="is-active"
        class="link"
        :to="{ name: 'answer', params: { id: answer.id } }">
      {{answer.id}} - {{answer.estado}} - {{answer.antecedentes}} - {{answer.evolucion}} - {{answer.concepto}}</div>
	  </p>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
