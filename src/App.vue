<template>
  <div id="app">
    <h2>Nav Bar</h2>
    <nav>
      <router-link to="/aboutderek">About Derek</router-link>
      <router-link to="/aboutproject">About Project</router-link>
    </nav>
    <h1> <a href="">Derek's Galactic Translator</a></h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
