<template>
  <div class="search">
    <form>
      <label>Search:</label> <br>
      <input type="text" placeholder="Search for something..." v-model="search">
      <button @click="searchYT">Submit</button>
    </form>


    <div id="yt-player"></div>
    <!-- insert if statement to only display this list if search is not empty -->
    <ol>
      <li><!--Insert search result here with playable buttons, add features to playlist etc --></li>
    </ol>

  </div>
</template>

<script>
export default {
name: "Search",
  data() {
  return {
    searchString: ""
  }
  },
  computed: {
    search: {
      get() {
        return this.searchString;
      },
      set(value) {
        this.searchString = value
      }
    }
},
  methods: {
  searchYT() {
    console.log("something happened, finally!");
    this.$store.dispatch("search", {search: this.searchString});
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