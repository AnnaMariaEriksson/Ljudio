<template>
<div class="register-account">
  <h2>Register a new account!</h2>

  <form @submit.prevent="addNewUser">
    <label>Username</label>
    <input type="text" v-model="username"> <br>
    <label>Password</label>
    <input type="password" v-model="password"> <br>
    <label>First name</label>
    <input type="text" v-model="firstName"> <br>
    <label>Last name</label>
    <input type="text" v-model="lastName"> <br>
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
      firstName: "",
      lastName: "",
      loggedIn: false
    }
  },
  methods: {
    addNewUser() {
      let user = {
        username: this.username,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
        loggedIn: this.loggedIn
      }
      alert(`Welcome, ${user.username}. Your account has been created.`);
      this.$store.commit("addUser", user);
    }
  }
}
</script>

<style scoped>
  .register-account {
    width: 30%;
    margin: 0 auto;
    background-color: burlywood;
  }
</style>