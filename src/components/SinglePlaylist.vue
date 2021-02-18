<template>
<div>
  <div>
    <h2>{{playlist.name}} {{playlist.playlist_id}}</h2>

  </div>

</div>
</template>

<script>

export default {
name: "SinglePlaylist",
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