<template>
  <div id="app">
    <div>
      <Header/>
      <router-view />
    </div>

  </div>
</template>

<style scoped>
  #app {
    width: 100%;
    background-color: #42b983;
  }
</style>
<script>
import Header from "@/components/Header";

export default {
  components: {Header}
}
</script>