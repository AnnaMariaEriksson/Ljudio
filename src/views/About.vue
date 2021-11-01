<template>
  <div class="about">
    <h1>This is an about page</h1>

    <h3 v-if="message=!null">If you can see this, we've successfully fetched a message from netlify's functions folder. <br>
    {{message}}
    </h3>


    <h2>Please observe - the DB connection does not work for some strange reason. I'm trying to fix that.</h2>
    <h3>Complete code can be found at <a href="https://github.com/AnnaMariaEriksson/ljudio">Github</a> </h3>
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
