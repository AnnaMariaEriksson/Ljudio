<template>
<div class="add-playlist">
  <h2>Add new playlist!</h2>

  <form @submit.prevent="addNewPlaylist">
    <label>Name of playlist</label>
    <input type="text" v-model="name">
    <button @submit="addNewPlaylist()">Create</button>
  </form>
  <Playlist/>
</div>
</template>

<script>
import Playlist from "@/components/Playlist";
export default {
name: "AddPlaylist",
  data() {
  return {
    name: ""
  }
  },
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
    let pl = {
      name: this.name
    }
    alert(`You've added a playlist called '${this.name}'`)
    this.$store.dispatch("addNewPlaylist", pl);

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