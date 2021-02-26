<template>
<div>
  <div v-for="(song, i) in songs" v-bind:key="i">
    <h3>{{song.nameofsong}}</h3>
    <h2>{{song.artist}}</h2>
    <div id="yt-player"></div>
    <p class="play" @click="play(song.videoid)">Play</p>
    <p class="pause" @click="pause()">Pause</p>
  </div>

</div>
</template>

<script>
export default {
name: "Song",
  data() {
  return {
    song: ""
  }
  },
  computed: {
  songs: {
    get() {
      return this.$store.state.songs;
    },
    set(value) {
      this.$store.commit("setSong", value)
    }
  },
  },
  created() {
    this.$store.dispatch("getSongs");
  },
  methods: {
    play(id) {
      window.player.loadVideoById(id);
      window.player.playVideo();
    },
    pause() {
      window.player.pauseVideo();
    }
  }
}
</script>

<style scoped>
.play:hover, .pause:hover {
  color: magenta;
}
</style>