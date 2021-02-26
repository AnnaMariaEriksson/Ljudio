<template>
  <div id="app">
      <Header/>
      <router-view/>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');

#app {
  font-family: 'Special Elite', monospace;
}

</style>
<script>
import Header from "@/components/Header";

export default {
  components: {Header},
  mounted() {
this.$store.dispatch("checkAuth")
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>