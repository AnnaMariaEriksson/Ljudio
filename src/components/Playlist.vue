<template>
  <div>
    <h2 v-if="playlists.length === 0">No playlists found :(</h2>
    <h2 v-if="playlists.length > 0">My Playlists</h2>
    <div>
      <ol>
        <li v-for="(p, i) in playlists" v-bind:key="i">{{p.name}} | Number of songs:  {{p.numberofsongs}}</li>
      </ol>
    </div>

  </div>
</template>

<script>
export default {
name: "Playlist",
  computed: {
    playlists: {
      get() {
        return this.$store.state.playlists.data;
      },
      set(value) {
        this.$store.commit("setPlaylistsData", value);
      }
    },

  },
  created() {
  this.$store.dispatch("getPlaylists");
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