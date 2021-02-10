<template>
<div class="add-playlist">
  <h2>Add new playlist!</h2>

  <form @submit.prevent="addNewPlaylist">
    <label>Name of playlist</label>
    <input type="text" v-model="name">
    <button @submit="addNewPlaylist">Create</button>
  </form>
  <Playlist/>
</div>
</template>

<script>
import Playlist from "@/components/Playlist";
export default {
name: "AddPlaylist",
  components: {Playlist},
  data() {
  return {
    name: "",
    listOfSongs: [],
    numberOfSongs: 0
  }
  },
  methods: {
  addNewPlaylist(){
    let playList = {
      name: this.name,
      listOfSongs: this.listOfSongs,
      numberOfSongs: this.numberOfSongs
    }
    alert(`A new playlist has been added with name: ${playList.name}.`);
    this.$store.commit("addPlaylist", playList)

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