<template>
  <div class="login">

    <form v-if="!user.loggedin" @submit="submit">
      <label>Username</label>
      <input type="text" placeholder="Username" v-model="username"> <br>
      <label>Password</label>
      <input type="password" placeholder="Password" v-model="password"> <br>
      <button type="submit" @submit="submit">Log in</button>
    </form>

    <router-link v-if="!user.loggedin" to="/register">Register></router-link>

    <div v-if="user.loggedin">
      <h3>Hello, {{user.firstname}} {{user.lastname}}!</h3>
    </div>
  </div>
</template>

<script>
export default {
name: "Login",
  data() {
  return {
    username: "",
    password: ""
  }
  },
  computed: {
  user(){
      return this.$store.state.user;
    }
  },
  methods: {
    submit(e) {
      e.preventDefault();
      this.$store.dispatch('login', {username: this.username, password: this.password});
    }
  }
}
</script>

<style scoped>

a {
  color: black;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  color: magenta;
}

.login form {
  grid-row: 1;
  grid-column: 4;
  padding: 5%;
  height: 80%;
  width: 80%;

}

.login form>input {
  margin: 1% 1% 1% 5%;
  height: 20px;
  font-family: 'Special Elite';
}

button {
  float: right;
  margin-right: 6%;
  font-family: 'Special Elite';
  border: none;
  background: none;
}
button:hover {
  color: #ff00ff;
}
</style>