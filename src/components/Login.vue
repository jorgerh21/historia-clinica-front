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
            email: email.value,
            password: password.value,
        }
		  );
      this.answers = data;
	  console.log(this.answers.user);
	  console.log(this.answers.authorization.token);
	  this.$cookies.set("tipoUsuario",this.answers.user.tipo_usuario_id);
	  this.$cookies.set("login",true);
	  this.$cookies.set("appToken",this.answers.authorization.token);
	  console.log(this.$cookies.get("appToken"));
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
    <h1>Login</h1>
    <p>Please fill in this form to create an account.</p>
    <hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email"  v-model="email" name="email" id="email" required>

    <label for="pzssword"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" v-model="password" name="password" id="password" required>

    <hr>

    <button @click="getAnswer" class="registerbtn">Login</button>
  </div>

  <div class="container signin">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
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

 