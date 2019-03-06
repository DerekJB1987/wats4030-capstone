<template>
  <div id="app">

    <div id="nav">
      <nav-bar></nav-bar>
    </div>
    
    <h1> <a href="">Derek's Galactic Translator</a></h1>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "@/views/NavBar";

export default {
  name: 'app',

  components: {
    "nav-bar": NavBar
  }
};
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
