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
	  if(this.$cookies.get("login") === 'false'){
	   this.$router.push('/login');
	  }
		var userid = this.$cookies.get("userId");
		var appToken = this.$cookies.get("appToken");
		const { data } = await axios.get("http://localhost:8000/api/usuarios/" + userid, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + appToken
                }
            });
	  
      this.answers = data;
	  console.log(this.answers);
	  var identificacion = this.answers.identificacion;

	 
    },
	async getUpdate() {
		const usuario = {
            name: nombre.value? nombre.value: this.answers.name,
            apellido: apellido.value? apellido.value: this.answers.apellido,
            tipoUsuario: tipoUsuario.value?tipoUsuario.value:this.answers.tipoUsuario,            
			identificacion: this.answers.identificacion,
			email: email.value?email.value:this.answers.email,
			celular: celular.value?celular.value:this.answers.celular,
			ubicacion: ubicacion.value?ubicacion.value:this.answers.ubicacion,			
        };
		var appToken = this.$cookies.get("appToken");
		var userid = this.$cookies.get("userId");
		console.log(appToken);
		console.log(usuario);
		const { data } = await axios.put("http://localhost:8000/api/actualizar/" + userid ,
    usuario,
    {   
		headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + appToken,
                },
				
            },
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
    <h1>Configuracion</h1>
    <p>Complete este formulario para crear un usuario.</p>
    <hr>
	
	<label for="tipoUsuario"><b>Tipo Usuario</b></label>
    <input type="text" :placeholder="answers.tipo_usuario_id" v-model="tipoUsuario" name="tipoUsuario" id="tipoUsuario" :disabled="true">

	<label for="identificacion"><b>Identificacion</b> {{ identificacion }}</label>
    <input type="text" :placeholder="answers.identificacion"  v-model="identificacion" name="identificacion" id="identificacion" :disabled="true">

	<label for="nombre"><b>Nombre</b></label>
    <input type="text" :placeholder="answers.name" v-model="nombre" name="nombre" id="nombre" >


	<label for="apellido"><b>Apellido</b></label>
    <input type="text" :placeholder="answers.apellido" v-model="apellido" name="apellido" id="apellido" >

	<label for="email"><b>Email</b></label>
    <input type="text" :placeholder="answers.email" v-model="email" name="email" id="email">


    <label for="celular"><b>Celular</b></label>
    <input type="text" :placeholder="answers.celular" v-model="celular" name="celular" id="celular">

	<label for="ubicacion"><b>Ubicacion</b></label>
    <input type="text" :placeholder="answers.ubicacion" v-model="ubicacion" name="ubicacion" id="ubicacion">



    <hr>

    <button @click="getUpdate" class="registerbtn">Actualizar</button>
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

 