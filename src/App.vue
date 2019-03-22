<template>
  <div id="app">

    <div id="nav">
      <nav-bar></nav-bar>
    </div>
    
    <h1> <a href="">Derek's Galactic Translator</a></h1>
    <router-view/>
    <div>
      <b-container class="mb-5">
        <b-row>
          <b-col>
            <b-img thumbnail fluid src="./images/yoda.jpg" alt="Yoda" />
          </b-col>
          <b-col>
            <b-img thumbnail fluid src="./images/pirate.jpg" alt="Jack Sparrow" />
          </b-col>
          <b-col>
            <b-img thumbnail fluid src="./images/dothraki.jpg" alt="Khal Drogo" />
          </b-col>
          <b-col>
            <b-img thumbnail fluid src="./images/shakespeare.jpg" alt="Shakespeare" />
          </b-col>
          <b-col>
            <b-img thumbnail fluid src="./images/vulcan.jpg" alt="Spock" />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import NavBar from "@/views/NavBar";
import { Image } from 'bootstrap-vue/es/components/image'

export default {
  name: 'app',

  components: {
    "nav-bar": NavBar
  }
};
</script>

<style>
#app {
  font-family: 'Roboto', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background-color: #BDBDBD;
  background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
}
h1, h2 {
  color: #2c3e50;
  font-weight: normal;
}
.results li {
  display: inline-block;
  margin: 10px;
  border: solid 1px #333;
  padding: 0.5rem;
  width: 200px;
  min-height: 100px;
  color: #7CFC00;
  background: rgba(0, 0, 0, 0.7);
}
a:link {
  text-decoration: none;
}
a {
  color: #1941D8;
  font-weight: bold;
}
nav {

}
</style>
