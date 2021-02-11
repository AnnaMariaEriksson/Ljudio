<template>
  <div>
  <h2>No playlists found :(</h2>
    <h2>My Playlists</h2>
    <div>
      <ol>
        <li v-for="(playlist, i) in playlists" :key="i"> Number of songs:  {{playlist.numberOfSongs}}</li>
      </ol>
    </div>


    <p>{{playlist.name}}</p>
    <p>From db: {{playlists[0].name}}</p>

    <button @submit="loadPlaylists()">Get playlists</button>

    <p>Hej svejs</p>
  </div>
</template>

<script>
export default {
name: "Playlist",
  computed: {
  playlists() {
    return this.$store.state.playlists.data;
  },
    playlist() {
    return this.$store.state.playlist;
    }

  },
  created() {
    this.$store
    .dispatch("getPlaylists")
    .then(value => {
      this.value = value
    })
    .catch(error => {
      alert(error);
    })
  },
  methods: {
  loadPlaylists() {
    alert("Nått hände i alla fall...");
  }
  }
}
</script>

<style scoped>
  h2, ol, li{
    text-align: center;
  }
  li {
    list-style: none;
  }
</style>