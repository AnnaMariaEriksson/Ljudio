import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Search from "@/components/Search";
import Playlist from "@/components/Playlist";
import Register from "@/components/Register";
import AddPlaylist from "@/components/AddPlaylist";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/search",
    name: "Search",
    component: Search
  },
  {
    path: "/playlists",
    alias: "/api/playlists:id",
    name: "Playlist",
    component: Playlist
  },

  {
    path: "/addPlaylist",
    name: "AddPlaylist",
    component: AddPlaylist
  },

  {
    path: "/register",
    name: "Register",
    component: Register
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "api/playlists:id",
    name: "Playlists"
  }
];

const router = new VueRouter({
  routes
});

export default router;
