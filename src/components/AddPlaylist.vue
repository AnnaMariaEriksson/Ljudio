<template>
<div class="add-playlist">
  <h2>Add new playlist!</h2>

  <form @submit.prevent="addNewPlaylist">
    <label>Name of playlist</label>
    <input type="text" v-model="playlists.name">
    <button @submit="addNewPlaylist()">Create</button>
  </form>
  <Playlist/>
</div>
</template>

<script>
import Playlist from "@/components/Playlist";
export default {
name: "AddPlaylist",
  components: {Playlist},
  computed: {
    playlists: {
      get() {
        return this.$store.state.playlists.data;
      },
      set(value) {
        this.$store.commit("setPlaylistsData", value);
      }
    }
  },
  methods: {
  addNewPlaylist() {
    this.$store.commit("addPlaylist");
    alert(`You've added a playlist '${this.playlist.name}'`)
  }
  }
}
</script>

<style scoped>
  .add-playlist {
    width: 30%;
    margin: 0 auto;
  }
</style>