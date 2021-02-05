<template>
  <div id="mainHeader">
    <header>
      <div class="logo">
        <img width="100" height="100" src="../assets/ljudio.png">
      </div>
      <div id="nav">
        <div class="shake">
          <router-link to="/">Home</router-link> |
        </div>
        <div class="shake">
          <router-link to="/about">About</router-link> |
        </div>
      </div>
      <Login style="grid-row: 1; grid-column: 4"/>
        <h1 class="shake">Ljudio</h1>
    </header>

  </div>

</template>

<script>
import Login from "@/components/Login";
export default {
name: "Header",
  components: {Login}
}
</script>

<style src="../assets/css/style.css">

header{
  color: #000000;
  display: grid;
  gap: 15px;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(4, 25%);
}

#nav {
  width: auto;
  grid-row: 1;
  grid-column: 2 / 4;
  padding: 3%;
  text-align: center;
}

#nav a {
  color: #000000;
  font-size: 32px;
  text-align: center;
}

.shake {
  display: inline-block;
}

.shake:hover {
  animation: shake 0.5s;
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

#nav a.router-link-exact-active {
  color: #ff00ff;
}
h1 {
  font-size: 120px;
  font-weight: lighter;
  grid-column: 2 /span 2;
  text-align: center;
  grid-row: 2;
}

</style>