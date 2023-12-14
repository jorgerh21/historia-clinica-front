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
  
    getStart(){
	console.log(this.$cookies.get("login"));
	  if(this.$cookies.get("login") == 'true'){
	  console.log(this.$cookies.get("login"));
	   this.$router.push('/');
	  }
	},
	
    async getAnswer() {
		
      const { data } = await axios.post("http://localhost:8000/api/login",
		{
            identificacion: identificacion.value,
            password: password.value,
        }
		  );
      this.answers = data;
	  console.log(this.answers.user);
	  console.log(this.answers.authorization.token);
	  this.$cookies.set("tipoUsuario",this.answers.user.tipo_usuario_id);
	  this.$cookies.set("login",true);
	  this.$cookies.set("userId",this.answers.user.id);
	  this.$cookies.set("appToken",this.answers.authorization.token);
	  console.log(this.$cookies.get("appToken"));
	  if(this.answers.user.primer){
	  this.$router.push('/');
	  }else{
	  this.$router.push('/password');
	 }
    },
  },
  beforeMount() {
    this.getStart();
  },
};
</script>
<template>
  <div class="container">
    <h1>Login</h1>
    <p>Complete la informacion para ingresar al sistema.</p>
    <hr>

	<label for="tipoUsuario"><b>Tipo Usuario</b></label>
    <select  name="tipoUsuario" id="tipoUsuario" >
	<option value="1">Medico</option>
	<option value="2" selected>Paciente</option>
	</select>
	<br>
	
    <label for="identificacion"><b>Identificacion</b></label>
    <input type="text" placeholder="Ingrese su identificacion"  v-model="identificacion" name="identificacion" id="identificacion" required>

    <label for="pzssword"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" v-model="password" name="password" id="password" required>

    <hr>

    <button @click="getAnswer" class="registerbtn">Login</button>
  </div>

  <div class="container signin">
    <p>No tiene cuenta cree una<a href="Register">Registrarse</a>.</p>
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

 