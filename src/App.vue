<template>
  <div id="app">

    <div id="nav">
      <nav-bar></nav-bar>
    </div>
    
    <h1> <a href="">Derek's Galactic Translator</a></h1>
    <router-view/>
    <div>
      <b-container fluid class="p-4 bg-dark">
        <b-row>
          <b-col>
            <b-img thumbnail fluid src="/src/assets/yoda.jpg" alt="Yoda" />
          </b-col>
          <b-col>
            <b-img thumbnail fluid src="/src/assets/pirate.jpg" alt="Jack Sparrow" />
          </b-col>
          <b-col>
            <b-img thumbnail fluid src="/src/assets/dothraki.jpg" alt="Khal Drogo" />
          </b-col>
          <b-col>
            <b-img thumbnail fluid src="/src/assets/shakespeare.jpg" alt="Shakespeare" />
          </b-col>
          <b-col>
            <b-img thumbnail fluid src="/src/assets/vulcan.jpg" alt="Spock" />
          </b-col>
        </b-row>
      </b-container>
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
