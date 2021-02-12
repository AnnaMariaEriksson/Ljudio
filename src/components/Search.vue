<template>
  <div class="search">
    <form>
      <label>Search:</label> <br>
      <input type="text" placeholder="Search for something..." v-model="searchString">
      <button @click="searchYT">Submit</button>
    </form>


    <div id="yt-player"></div>
    <!-- insert if statement to only display this list if search is not empty -->
   <div v-for="(r1, i) in search" v-bind:key="i">
     <p v-for="(r2, i) in r1" v-bind:key="i">{{r2}}</p>
   </div>

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
        return this.$store.state.search;
      },
      set(value) {
        this.$store.commit("setSearch", value)
      },
      data() {
          return this.$store.state.search.data;
      }
    },
},
  methods: {
  searchYT(e) {
    e.preventDefault();
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