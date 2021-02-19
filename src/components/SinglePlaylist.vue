<template>
<div>
  <div>
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

</style>