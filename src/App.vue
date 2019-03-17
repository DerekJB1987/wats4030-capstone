<template>
  <div id="app">

    <div id="nav">
      <nav-bar></nav-bar>
    </div>
    
    <h1> <a href="">Derek's Galactic Translator</a></h1>
    <router-view/>
  <div>
    <p>
      <img src="/src/assets/yoda.jpg" class="img-thumbnail" alt="Yoda">
      <img src="/src/assets/pirate.jpg" class="img-thumbnail" alt="Jack Sparrow">
      <img src="/src/assets/dothraki.jpg" class="img-thumbnail" alt="Khal Drogo">
      <img src="/src/assets/shakespeare.jpg" class="img-thumbnail" alt="Shakespeare">
      <img src="/src/assets/vulcan.jpg" class="img-thumbnail" alt="Spock">
    </p>
  </div>
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
  background-color: #ebd5b3;
  background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
}
a:link {
  text-decoration: none;
}
</style>
