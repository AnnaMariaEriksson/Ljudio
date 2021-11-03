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
    alert('Hello, there... Just so you know, it will take a while until something loads here. \n \n'  +
      'That is because the backend is hosted at Heroku and I cannot get cron jobs atm. \n \n' +
      'So huge thanks for bearing with me here...! \n \n' +
    'Also there might be an issue with signin in etc, but I am working all these little bugs out in time.')
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>