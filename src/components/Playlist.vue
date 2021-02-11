<template>
  <div>
    <h2 v-if="playlists.length === 0">No playlists found :(</h2>
    <h2 v-if="playlists.length > 0">My Playlists</h2>
    <div>
      <ol>
        <li v-for="(playlist, i) in playlists" v-bind:key="i"> Name of playlist: {{playlist.name}} | Number of songs:  {{playlist.numberOfSongs}}</li>
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
    playlist: {
      name: {
        get() {
          return this.$store.state.playlist.name;
        },
        set(value) {
          this.$store.commit("setPlaylistName", value)
        },
        numberOfSongs: {
          get() {
            return this.$store.state.playlist.numberOfSongs;
          },
          set(value) {
            this.$store.commit("setPlaylistNumberOfSongs", value)
          }
        }
    }

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