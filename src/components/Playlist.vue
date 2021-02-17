<template>
  <div>
    <h2 v-if="playlists.length === 0">No playlists found :(</h2>
    <h2 v-if="playlists.length > 0">My Playlists</h2>
    <div v-for="(p, i) in playlists" v-bind:key="i">

      <!--<router-link :to=" `/playlists/${p.id}` ">{{p.name}}</router-link>-->
      <!--<router-link :to="/playlists/ + p.id">{{p.name}}</router-link>-->
      <router-link :to="{ name: 'Playlist', params: { id: p.id}}">{{p.name}}</router-link>

    </div>

    <router-link to="/playlists/1">Test playlist</router-link>

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