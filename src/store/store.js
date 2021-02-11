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
      numberOfSongs: 3,
      name: "Test playlist, not from DB"
    },
    songs: [],
    albums: [],
    users: {
      data: []
    },
    user: {
      firstName: "",
      lastName: "",
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
    setPlaylistsData(state, value) {
      state.playlists.data = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setUsersData(state, value) {
      state.users.data = value;
    },
    setUserFirstName(state, value){
      state.user.firstName = value
    },
    setUserLastName(state, value){
      state.user.lastName = value
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
    async searchYTVideo(){
      let str = document.querySelector('.searchinputfield').value;
      let response = await fetch('http://localhost:3000/api/yt/search/' + str);
      let data = await response.json();
      alert(`you've searched for ${str}`)
      document.querySelector('textarea').value = JSON.stringify(data, undefined, 4)
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
