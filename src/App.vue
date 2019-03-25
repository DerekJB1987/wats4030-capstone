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
            <b-img thumbnail fluid src="./images/derek_galactica.png" alt="Background image of a galaxy with portrait images of Khal Drogo, Jack Sparrow, Yoda, Shakespeare and Spock carousel in the middle" />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import NavBar from "@/views/NavBar";
import VueAnalytics from 'vue-analytics'
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
.bg-primary {
    background-image: linear-gradient(120deg,#000000,#073176)!important; 
}
/*Responsive breakpoints */
/* Extra Small devices (portrait phones, less than 576px) */
@media (max-width: 575.99px) {
}
/* Small devices (landscape phones, greater than 576px but less than 768px) */
@media (min-width: 576px) and (max-width: 767.99px) {
}
/* Medium devices (tablets, greater than 768px but less than 992px) */
@media (min-width: 768px) and (max-width: 991.99px) {
}
/* Large devices (desktops, greater than 992px but less than 1200px) */
@media (min-width: 992px) and (max-width: 1199.99px) {
}
/* Extra Large devices (large desktops/monitor screens, greater than 1200px) */
@media (min-width: 1200px) {
}
</style>
