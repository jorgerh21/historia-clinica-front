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
	if(!this.$cookies.get("login")){
	   this.$router.push('/login');
	  }
	  
	  if(this.$cookies.get("tipoUsuario") == 2){
	   this.$router.push('/Paciente');
	  }

	  var appToken = this.$cookies.get("appToken");
	  var userid = this.$cookies.get("userId");
      const { data } = await axios.get("http://localhost:8000/api/verhistorias/" + userid, {
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

<table>
<tr><td>Paciente</td><td>Concecutivo</td><td>Estado</td><td>Antecedentes</td><td>Evolucion</td><td>Concepto</td><td>Recomendaciones</td></tr>
<tr v-for="answer in answers" ><td>{{answer.paciente.name}} {{answer.paciente.apellido}}</td><td>{{answer.consecutivo}}</td><td>{{answer.estado}}</td><td>{{answer.antecedentes}}</td><td>{{answer.evolucion}}</td><td>{{answer.concepto}}</td><td>{{answer.recomendaciones}}</td></tr>

</table>
</p>
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
table {
  margin: 0 auto;
}

/* Default Table Style */
table {
  color: #333;
  background: white;
  border: 1px solid grey;
  font-size: 12pt;
  border-collapse: collapse;
}
table thead th,
table tfoot th {
  color: #777;
  background: rgba(0,0,0,.1);
}
table caption {
  padding:.5em;
}
table th,
table td {
  padding: .5em;
  border: 1px solid lightgrey;
}
/* Zebra Table Style */
[data-table-theme*=zebra] tbody tr:nth-of-type(odd) {
  background: rgba(0,0,0,.05);
}
[data-table-theme*=zebra][data-table-theme*=dark] tbody tr:nth-of-type(odd) {
  background: rgba(255,255,255,.05);
}
/* Dark Style */
[data-table-theme*=dark] {
  color: #ddd;
  background: #333;
  font-size: 12pt;
  border-collapse: collapse;
}
[data-table-theme*=dark] thead th,
[data-table-theme*=dark] tfoot th {
  color: #aaa;
  background: rgba(0255,255,255,.15);
}
[data-table-theme*=dark] caption {
  padding:.5em;
}
[data-table-theme*=dark] th,
[data-table-theme*=dark] td {
  padding: .5em;
  border: 1px solid grey;
}
</style>
