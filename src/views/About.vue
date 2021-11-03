<template>
  <div class="about">
    <h1>This is an about page</h1>

    <h2>The DB connection finally works in production mode, but there might still be some hiccups!</h2>
    <h3>Complete code can be found at <a href="https://github.com/AnnaMariaEriksson/ljudio">Github.</a> </h3>
  </div>
</template>

<script>
export default {
  name: "About",
  data () {
    return {
      message: ''
    }
  }
}
</script>
