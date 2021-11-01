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
        },
        search: [],
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
        setPlaylist(state, value) {
            state.playlist = value
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
        setUserfirstname(state, value) {
            state.user.firstname = value
        },
        setUserlastname(state, value) {
            state.user.lastname = value
        },
        setUserUserName(state, value) {
            state.user.username = value
        },
        setUserPassword(state, value) {
            state.user.password = value
        },
        setUserLoggedin(state, value) {
            state.user.loggedin = value;
        }
    },
    actions: {
        async getPlaylists({commit}) {

            try {
                let response = await fetch(process.env.VUE_APP_API_URL+'/api/playlists/');
                let data = await response.json();
                commit("setPlaylistsData", data);
            } catch (e) {
                e.message('Something went wrong.');
            }
        },

        async getSongs({commit}) {
            let response = await fetch(process.env.VUE_APP_API_URL+'/api/songs');
            let data = await response.json();
            commit("setSong", data)
        },

        async getSinglePlaylist({commit}, playlist_id) {
            try {
                let response = await fetch(process.env.VUE_APP_API_URL+'/api/playlists/' + playlist_id);
                let data = await response.json();
                commit("setPlaylist", data);
            } catch (e) {
                this.error = e;
            }
        },

        async addNewPlaylist({commit}, pl) {
            let response = await fetch(process.env.VUE_APP_API_URL+'/api/playlists', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(pl)
            })
            let newPlaylist = await response.json();
            console.log(newPlaylist)
            commit("setPlaylistsData", newPlaylist)
        },

        async search({commit}, searchString) {
            let response = await fetch(process.env.VUE_APP_API_URL+'/api/yt/songs/' + searchString.search);
            let data = await response.json();
            commit("setSearch", data.content);
        },

        async login({dispatch}, credentials) {
            let response = await fetch(process.env.VUE_APP_API_URL+'/api/login/', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(credentials)
            })

            await response.json()
            dispatch('checkAuth')
        },
        async checkAuth({commit}) {
            let response = await fetch(process.env.VUE_APP_API_URL+'/api/login/')
            let data = await response.json()
            let user = data
            console.log(user);
            commit('setUser', user)
        },

        async registerNewUser({commit}, accountInfo) {
            let response = await fetch(process.env.VUE_APP_API_URL+'/api/users/', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(accountInfo)
            })
            let newUser = await response.json();
            console.log(newUser)
            commit("setUser", newUser)
        },

        async addSongToPlayList({commit}, songToAdd) {
            let response = await fetch(process.env.VUE_APP_API_URL+'api/songs', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(songToAdd)
            })
            let newSong = await response.json();
            console.log(newSong)
            commit("setSong", newSong)
        },

        async getUsers({commit}) {
            let response = await fetch(process.env.VUE_APP_API_URL+"/api/users/");
            let data = await response.json();
            commit("setUser", data)
        }
    },
    modules: {}
});
