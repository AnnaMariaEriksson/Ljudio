<template>
<div class="register-account">
  <h2>Register a new account!</h2>

  <form @submit.prevent="addNewUser">
    <label>Username</label>
    <input type="text" v-model="username"> <br>
    <label>Password</label>
    <input type="password" v-model="password"> <br>
    <label>First name</label>
    <input type="text" v-model="firstname"> <br>
    <label>Last name</label>
    <input type="text" v-model="lastname"> <br>
    <button @submit="addNewUser">Create account</button>
  </form>
</div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      loggedin: false
    }
  },
  methods: {
    addNewUser() {
      let user = {
        username: this.username,
        password: this.password,
        firstname: this.firstname,
        lastname: this.lastname,
        loggedin: this.loggedin
      }
      alert(`Welcome, ${user.username}. Your account has been created.`);
      this.$store.dispatch("registerNewUser", user);
    }
  }
}
</script>

<style scoped>
  .register-account {
    width: 30%;
    margin: 0 auto;
  }
</style>