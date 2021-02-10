<template>
  <div>
  <!--<h2 v-if="$store.state.playlists.length === 0">No playlists found :(</h2>
    <h2 v-else-if="$store.state.playlists.length > 0">My Playlists</h2>-->
    <ol v-if="$store.state.playlists.data.length = 1">
      <li v-for="(playlist, i) in playlists" v-bind:key="i">Name: {{playlist.name}} | No. of songs: {{playlist.numberOfSongs}}</li>
    </ol>
  </div>
</template>

<script>
export default {
name: "Playlist",
  computed: {
  playlists() {
    let p = [];
    for (let playlist of this.$store.state.playlists.data) {
      if (playlist.id === this.$route.params.id){
        p.push(playlist);
      }
    }
    return p;
  }
  },
  created() {
    this.$store.dispatch('getPlaylists');
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