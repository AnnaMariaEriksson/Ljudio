<template>
  <div class="mainHeader">
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
        <div class="shake" v-if="user.loggedin">
          <router-link to="/playlists">My Playlists</router-link> |
        </div>
      </div>
      <Login/>
        <h1 class="shake ljudioTitle">Ljudio</h1>
  </div>

</template>

<script>
import Login from "@/components/Login";
export default {
name: "Header",
  components: {Login},
  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>

<style scoped>

.mainHeader {
  color: #000000;
  display: grid;
  gap: 15px;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(4, 25%);
  width: 100%;
  background-image: url("../assets/Top.png");
  background-repeat: no-repeat;
}

#nav {
  width: auto;
  grid-row: 1;
  grid-column: 2 / 4;
  padding: 3%;
  text-align: center;
}

#nav a {
  color: #ffffff;
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
.ljudioTitle {
  font-size: 120px;
  font-weight: lighter;
  grid-column: 2 /span 2;
  text-align: center;
  grid-row: 2;
  background-image: url("../assets/Border bottom.png");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
}

@media screen and (max-width: 1000px){
  .mainHeader {
    display: inline-block;
    margin: 0 auto;
  }
  .ljudioTitle {
    font-size: 15vw;
    text-align: center;
    margin: 0 auto;
  }

}

</style>