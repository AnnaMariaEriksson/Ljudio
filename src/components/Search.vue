<template>
  <div class="search">
    <form>
      <label>Search:</label> <br>
      <input type="text" placeholder="Search for a song..." v-model="searchString">
      <button @click="searchYT">Submit</button>
    </form>


    <!-- insert if statement to only display this list if search is not empty -->
    <div class="searchResult" v-for="(r1, i) in search" v-bind:key="i">
      <div id="yt-player"></div>
      <p class="play" @click="play(r1.videoId)">Play</p>
      <p class="pause" @click="pause()">Pause</p>
      <h2 class="nameOfSong">{{r1.name}}</h2>
      <h3 class="nameOfArtist">{{r1.artist.name}}</h3>
        <h4 class="addToPlaylist">+ Add to playlist</h4>
      <div class="playlistDropDown">
        <form>
          <select >
            <option v-for="playlist in playlists" v-bind:key="playlist.id">{{playlist.name}}</option>
          </select>
        </form>

      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "Search",
  data() {
    return {
      searchString: "",
    }
  },
  computed: {
    search: {
      get() {
        return this.$store.state.search;
      },
      set(value) {
        this.$store.commit("setSearch", value)
      }
    },
    playlists: {
      get() {
        return this.$store.state.playlists.data;
      },
      set(value) {
        this.$store.commit("setPlaylistsData", value)
      }
    }
  },
  created() {
    this.$store.dispatch("getPlaylists");
  },
  methods: {
    searchYT(e) {
      e.preventDefault();
      this.$store.dispatch("search", {search: this.searchString});
    },
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

.searchResult {
  margin: 30px auto auto auto;
  width: 50%;

  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(3, 33%);
  gap: 1%;
  padding: 1%;
}
.nameOfSong {
  grid-row: 1;
  grid-column: 1;
}
.nameOfArtist {
  grid-row: 2;
  grid-column: 1;
}
.play {
  grid-row: 1;
  grid-column: 2;
}
.play:hover, .pause:hover, .addToPlaylist:hover {
  color: magenta;
}
.pause {
  grid-row: 2;
  grid-column: 2;
}

.addToPlaylist {
  font-size: x-large;
  grid-row: 3;
  grid-column: 1 / span 3;
}
</style>