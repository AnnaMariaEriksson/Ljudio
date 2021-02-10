<template>
  <div class="search">
    <form>
      <label>Search:</label> <br>
      <input class="searchinputfield" type="text" placeholder="Search for songs, album, genre or an artist">
      <button @submit="searchYTVideoTVideo">Submit</button>
    </form>

<textarea></textarea>
    <!-- insert if statement to only display this list if search is not empty -->
    <ol v-if="$store.state.playlists.length > 0">
      <li><!--Insert search result here with playable buttons, add features to playlist etc --></li>
    </ol>

  </div>
</template>

<script>
export default {
name: "Search",
  methods: {
  search() {
    //Do something
  }
  }
}
</script>

<style scoped>
 form {
   margin: auto;
   text-align: center;
 }
 label {
   font-size: 40px;
 }
 input {
   height: 40px;
   margin-left: 1%;
   width: 300px;
   font-family: "Special Elite";
 }

 button {
   font-family: "Special Elite";
   border: none;
   background: none;
 }

 button:hover {
   color: magenta;
 }
</style>