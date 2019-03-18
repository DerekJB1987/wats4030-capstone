<template>
  <div id="app">

    <div id="nav">
      <nav-bar></nav-bar>
    </div>
    
    <h1> <a href="">Derek's Galactic Translator</a></h1>
    <router-view/>
    <div>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="1024"
        img-height="480"
        >
        <b-carousel-slide caption="Yoda" img-src="/src/assets/yoda.jpg" class="img-thumbnail" alt="Yoda" />
        <b-carousel-slide caption="Pirate" img src="/src/assets/pirate.jpg" class="img-thumbnail" alt="Jack Sparrow" />
        <b-carousel-slide caption="Dothraki" img src="/src/assets/dothraki.jpg" class="img-thumbnail" alt="Khal Drogo" />
        <b-carousel-slide caption="Shakespearean" img src="/src/assets/shakespeare.jpg" class="img-thumbnail" alt="Shakespeare" />
        <b-carousel-slide caption="Vulcan" img src="/src/assets/vulcan.jpg" class="img-thumbnail" alt="Spock" />
      </b-carousel>
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
