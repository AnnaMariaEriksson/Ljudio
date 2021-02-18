<template>
  <div class="home">

    <div class="MenuItem shake">
      <router-link to="/playlists">Play</router-link>
    </div>

    <div class="MenuItem shake">
      <router-link to="/search">Search</router-link>
    </div>

    <div class="MenuItem shake">
      <router-link to="/addPlaylist">Create</router-link>
    </div>

  </div>
</template>

<script>

export default {
  name: "Home"
}
</script>

<style>

.home {
  display: grid;
  gap: 10%;
  grid-template-columns: repeat(3, auto);
  margin: auto;
}

.MenuItem {
  margin-top: 20%;
}

.MenuItem a {
  font-size: 70px;
  color: black;
  text-decoration: none;
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

@media screen and (max-width: 800px){
  .home {
    display: flex;
    flex-direction: column;
    width: 30vw;
    justify-items: center;

  }
}

</style>
