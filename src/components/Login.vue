<template>
  <div class="login">
    <label>Username</label>
    <input type="text" placeholder="Username"> <br>
    <label>Password</label>
    <input type="password" placeholder="Password"> <br>
    <button>Log in</button>
  </div>
</template>

<script>
export default {
name: "Login"
}
</script>

<style scoped>
.login {
  grid-row: 1;
  grid-column: 4;
  padding: 5%;
  height: 80%;
  width: 80%;

}

.login>input {
  margin: 1% 1% 1% 5%;
  height: 20px;
  font-family: 'Special Elite';
}
.login>label {
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