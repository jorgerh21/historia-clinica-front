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
	  if(this.$cookies.get("login") === 'true'){
	   this.$router.push('/');
	  }
	 
    },
	async getRegister() {
		const usuario = {
            name: nombre.value,
            apellido: apellido.value,
            tipoUsuario: parseInt(tipoUsuario.value),            
			identificacion: identificacion.value,
			email: email.value,
			celular: celular.value,
			ubicacion: ubicacion.value,			
        };
		console.log(usuario);
      const { data } = await axios.post("http://localhost:8000/api/register",
		      usuario
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
    <h1>Registrarse</h1>
    <p>Complete este formulario para crear un usuario.</p>
    <hr>
	
	<label for="tipoUsuario"><b>Tipo Usuario</b></label>
    <select  v-model="tipoUsuario" name="tipoUsuario" id="tipoUsuario" >
	<option value="1">Medico</option>
	<option value="2" selected>Paciente</option>
	</select>
	<br>
	
	<label for="identificacion"><b>Identificacion</b></label>
    <input type="text" placeholder="Ingrese Identificacion" v-model="identificacion" name="identificacion" id="identificacion" required>

	<label for="nombre"><b>Nombre</b></label>
    <input type="text" placeholder="Ingrese Nombre" v-model="nombre" name="nombre" id="nombre" required>


	<label for="apellido"><b>Apellido</b></label>
    <input type="text" placeholder="Ingrese Apellido" v-model="apellido" name="apellido" id="apellido" required>

	<label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" v-model="email" name="email" id="email">


    <label for="celular"><b>Celular</b></label>
    <input type="text" placeholder="Ingrese telefono" v-model="celular" name="celular" id="celular">

	<label for="ubicacion"><b>Ubicacion</b></label>
    <input type="text" placeholder="Ingrese telefono" v-model="ubicacion" name="ubicacion" id="ubicacion">



    <hr>

    <button @click="getRegister" class="registerbtn">Register</button>
  </div>

  <div class="container signin">
    <p>ya tiene cuenta? <a href="/login">Ingresar</a>.</p>
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

 