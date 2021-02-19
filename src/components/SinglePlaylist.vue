<template>
<div class="single">
  <div class="songInfo">
    <h2>{{playlist.name}}</h2>
    <Song/>

  </div>

</div>
</template>

<script>

import Song from "@/components/Song";
export default {
name: "SinglePlaylist",
  components: {Song},
  computed: {
    playlist() {
      return this.$store.state.playlist;
    },

  },
  created() {
    this.$store.dispatch("getSinglePlaylist")
  },
  methods: {
  }
}
</script>

<style scoped>
.single {
  width: 30vw;
  margin: auto;
  text-align: center;
}

.songInfo {
  width: 40vw;
  background-image: url("../assets/Pink bg.png");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>