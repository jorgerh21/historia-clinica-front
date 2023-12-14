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
      const usuario = {
			password: password.value,			
        };
    var appToken = this.$cookies.get("appToken");
	  var userid = this.$cookies.get("userId");
    console.log(userid);
    console.log(usuario);  
    const { data } = await axios.put("http://localhost:8000/api/password/" + userid, 
    usuario,
    {
      
       headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + appToken
                }
                
            });
	  console.log(data);
	  this.answers = data;
     
	  this.$router.push('/');
    this.$router.go(0);
    },
  },
  beforeMount() {
    //this.getStart();
  },
};
</script>
<template>
  <div class="container">
    <h1>Cambiar contraseña</h1>
    <p>Complete la informacion para cambiar contraseña.</p>
    <hr>

    <label for="pzssword"><b>contraseña</b></label>
    <input type="password" placeholder="Ingrese contraseña" v-model="password" name="password" id="password" required>
	
	<label for="password2"><b>Repetir contraseña</b></label>
    <input type="password" placeholder="repetir contraseña" v-model="password2" name="password2" id="password2" required>

    <hr>

    <button @click="getAnswer" class="registerbtn">Cambiar Contraseña</button>
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

 