<template>
  <div class="home">

    <div class="play">
      <h2>Play</h2>
    </div>

    <div class="search">
      <h2>Search</h2>
    </div>

    <div class="create">
      <h2>Create</h2>
    </div>

  </div>
</template>

<script>

export default {
  name: "Home"
};
</script>

<style>

.home {
  display: grid;
  gap: 10%;
  grid-template-columns: repeat(3, auto);
  margin: auto;
}



</style>
