<template>
<div>
  <div>
    <h2>{{playlist.name}} {{playlist.playlist_id}}</h2>
    <a href="#" @click="sendID()">Click me</a>
  </div>

</div>
</template>

<script>
import store from "@/store/store";

export default {
name: "SinglePlaylist",
  computed: {
    playlist() {
      return this.$store.state.playlist;
    },

  },
  created() {
    this.$store.dispatch("getSinglePlaylist", 1)
  },
  methods: {
    sendID() {
      console.log(this.playlist)
      console.log(store.getters.getPlaylistId(this.playlist.playlist_id))
    }
  }
}
</script>

<style scoped>

</style>