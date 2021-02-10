import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //adding objects and list of objects
    playlists: {
      data: []
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
      loggedIn: false
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
    }
  },
  actions: {
    async getPlaylists({commit}) {
      let response = await fetch('/api/playlists/');
      let data = await response.json();

      commit('setPlaylistsData', data);
    },
    async searchYTVideo(){
      let str = document.querySelector('.searchinputfield').value;
      let response = await fetch('http://localhost:3000/api/yt/search/' + str);
      let data = await response.json();
      alert(`you've searched for ${str}`)
      document.querySelector('textarea').value = JSON.stringify(data, undefined, 4)
    },

    async login({dispatch}, credentials){
      let response = await fetch('/api/login',{
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      })
      await response.json()
      dispatch('checkAuth')
    },
    async checkAuth({commit}){
      let response = await fetch('/api/login')
      let data = await response.json()
      let user = data
      commit('setUser', user)
    },
    async getUsers({commit}) {
      let response = await fetch("/api/users");
      let data = await response.json();
      commit("setUser", data)
    }
  },
  modules: {}
});
