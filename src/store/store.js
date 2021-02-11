import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //adding objects and list of objects
    playlists: {
      data: []
    },
    playlist: {
      name: "",
      numberofsongs: 0,

    },
    search: "",
    songs: [],
    albums: [],
    users: {
      data: []
    },
    user: {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      loggedin: false
    }
  },
  //mutations = methods
  mutations: {
    addPlaylist(state, playlistToAdd) {
      state.playlists.push(playlistToAdd);
    },
    addSongToPlaylist(state, songToAdd) {
      state.playlists.unshift(songToAdd);
    },
    addUser(state, userToAdd) {
      state.users.push(userToAdd);
    },
    setSong(state, value) {
      state.songs = value;
    },
    setSearch(state, value) {
      state.search = value;
    },
    setPlaylistsData(state, value) {
      state.playlists.data = value;
    },
    setPlaylistName(state, value) {
      state.playlist.name = value
    },
    setPlaylistnumberofsongs(state, value) {
      state.playlist.numberofsongs = value
    },

    setUser(state, value) {
      state.user = value;
    },
    setUsersData(state, value) {
      state.users.data = value;
    },
    setUserfirstname(state, value){
      state.user.firstname = value
    },
    setUserlastname(state, value){
      state.user.lastname = value
    },
    setUserUserName(state, value){
      state.user.username = value
    },
    setUserPassword(state, value){
      state.user.password = value
    },
    setUserLoggedin(state, value) {
      state.user.loggedin = value;
    }
  },
  actions: {

    async getPlaylists({commit}) {

      try {
        let response = await fetch('http://localhost:3000/api/playlists/');
        let data = await response.json();
        commit("setPlaylistsData", data);
      } catch (e) {
        e.message('Nått gick fel.');
      }
    },

    async addPlaylist({commit}) {
      try {
        let response = await fetch('http://localhost:3000/api/playlists/');
        let result = await response.json();
        commit('setPlaylistsData', result)
      }
      catch (e) {
        e.message("Nått gick fel igen");
      }
      
    },

    async searchYTVideo({dispatch}, search){
      let response = await fetch('http://localhost:3000/api/yt/search/:searchstring',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(search)
      })
      await response.json();
      console.log(search);
      dispatch('getSearchResult')
    },

    async getSearchResult({commit}) {
      let response = await fetch('http://localhost:3000/api/yt/search/:searchstring');
      let data = await response.json();
      commit("setSearch", data);
    },

    async login({dispatch}, credentials){
      let response = await fetch('http://localhost:3000/api/login',{
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      })
      await response.json()
      dispatch('checkAuth')
    },
    async checkAuth({commit}){
      let response = await fetch('http://localhost:3000/api/login')
      let data = await response.json()
      let user = data
      commit('setUser', user)
    },
    async getUsers({commit}) {
      let response = await fetch("http://localhost:3000/api/users");
      let data = await response.json();
      commit("setUser", data)
    }
  },
  modules: {}
});
