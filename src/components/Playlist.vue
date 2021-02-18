<template>
  <div>
    <div>
      <h2 v-if="playlists.length === 0">No playlists found :(</h2>
      <h2 v-if="playlists.length > 0">My Playlists</h2>
      <div v-for="(p, i) in playlists" v-bind:key="i">

        <router-link :to="'/playlists/' + p.playlist_id">{{p.name}}</router-link>
      </div>
    </div>


  </div>
</template>

<script>
import SinglePlaylist from "@/components/SinglePlaylist";
export default {
name: "Playlist",
  components: {SinglePlaylist},
  props: ["playlist"],
  computed: {
    playlists() {
      let p = [];
      for(let playlist of this.$store.state.playlists.data) {
        if (playlist.id === this.$route.params.id) {
          p.push(playlist)
        }
      }
      return p;
    }
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