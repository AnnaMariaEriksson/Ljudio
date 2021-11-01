<template>
  <div>
    <div>
      <h2 v-if="playlists.length === 0">No playlists found :(</h2>
      <h2 v-if="playlists.length > 0">My Playlists</h2>
      <div v-for="(p, i) in playlists" v-bind:key="i" @click="loadSinglePlaylist(p)">

        <router-link :to="'/playlists/' + p.playlist_id">{{p.name}}</router-link>
      </div>
    </div>


  </div>
</template>

<script>
export default {
name: "Playlist",
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
  },
  methods: {
    loadSinglePlaylist(object) {
      console.log(object);
      //We're sending the playlist id, but we get the songs from playlist with id 1.
      //Issue has probably something to do with db table relations not being properly setup.
      this.$store.dispatch("getSinglePlaylist", object.playlist_id)
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