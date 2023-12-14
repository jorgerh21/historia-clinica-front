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
    async getStart() {
	  if(this.$cookies.get("tipoUsuario") != 1){
	   this.$router.push('/');
	  }
	  var appToken = this.$cookies.get("appToken");
	  var userid = this.$cookies.get("userId");
      const { data } = await axios.get("http://localhost:8000/api/pacientes", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + appToken
                }
            });
	  console.log(data);
	  this.answers = data;
	 
    },
	async putHistory() {
		var userid = this.$cookies.get("userId");
		const historia = {
			medico_id:parseInt(userid),
			paciente_id:parseInt(paciente.value),
			estado:estado.value,
			antecedentes:antecedentes.value,
			evolucion:evolucion.value,
			concepto:concepto.value,
			recomendaciones:recomendaciones.value,
			consecutivo:parseInt(consecutivo.value),
							
        };
		console.log(historia);
      const { data } = await axios.post("http://localhost:8000/api/historias",
		      historia
		  );
      this.answers = data;
	  this.$router.push('/');
	 
    },
  },
  beforeMount() {
    this.getStart();
  },
};
</script>
<template>
  <div class="container">
    <h1>Crear Historia</h1>
    <p>Complete este formulario para crear un usuario.</p>
    <hr>
	
	<label for="paciente"><b>Paciente</b></label>
    <select  v-model="paciente" name="paciente" id="paciente" >
	<option v-for="answer in answers" >{{ answer.id }} - {{ answer.name }} - {{ answer.apellido }}</option>
	</select>
	<br>
	
	<label for="consecutivo"><b>consecutivo</b></label>
    <input type="text" placeholder="Ingrese consecutivo" v-model="consecutivo" name="consecutivo" id="consecutivo" required>

	<label for="estado"><b>estado</b></label>
    <input type="text" placeholder="Ingrese estado" v-model="estado" name="estado" id="estado" required>
	
	<label for="antecedentes"><b>antecedentes</b></label>
    <input type="text" placeholder="Ingrese antecedentes" v-model="antecedentes" name="antecedentes" id="antecedentes" required>
	
	<label for="evolucion"><b>evolucion</b></label>
    <input type="text" placeholder="Ingrese evolucion" v-model="evolucion" name="evolucion" id="evolucion" required>
	
	<label for="concepto"><b>concepto</b></label>
    <input type="text" placeholder="Ingrese concepto" v-model="concepto" name="concepto" id="concepto" required>
	
	<label for="recomendaciones"><b>recomendaciones</b></label>
    <input type="text" placeholder="Ingrese recomendaciones" v-model="recomendaciones" name="recomendaciones" id="recomendaciones" required>


    <hr>

    <button @click="putHistory" class="registerbtn">Crear Historia</button>
  </div>

</template>
<style>
* {box-sizing: border-box}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit/register button */
.registerbtn {
  background-color: #04AA6D;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity:1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}
</style>

 