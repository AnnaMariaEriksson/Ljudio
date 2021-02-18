<template>
<div>
  <p v-bind:playlist="playlist">{{ playlist }}</p>
</div>
</template>

<script>
export default {
name: "SinglePlaylist",
  data() {
  return {
    playlist: "Moo"
  }
  }
}
</script>

<style scoped>

</style>