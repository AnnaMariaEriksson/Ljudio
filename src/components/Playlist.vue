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
      //Hardcoded payload value
      this.$store.dispatch("getSinglePlaylist", 1)
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