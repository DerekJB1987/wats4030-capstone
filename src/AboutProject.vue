<template>
  <div class="container">
      <h1>About Derek's Galactic Translator</h1><br>
      
      <p>Derek's Galactic Translator is a capstone project for the <a href="https://ncs.seattleu.edu/programs-courses/web-development/" target="_blank">Seattle University Web Development Certificate Program</a>.</p>
      <p>I decided to use <a href="https://vuejs.org/" target="_blank">Vue.js</a> since it is the JavaScript framework that is taught to all students in the program and helps practice learning how to code in JavaScript.<p> 
      <p>My project uses BootStrap 4 and Boostrap-vue to aid in styling and CSS as well as practice my Bootstrap skills that was taught briefly earlier in the program.</p>
      <p>This project uses the <a href="https://funtranslations.com/#" target="_blank">Fun Translations API</a> to send a text input by the user to the third party API site and return a JSON translation for the user to view.</p>
      <p>To analyze my project for user accessibility, I checked it with <a href="https://wave.webaim.org/" target="_blank">WAVE</a> by using their URL Dinolytics feature.</p>
      <p>Fun Translations API is public and imposes a ratelimit of 60 calls per day with a distribution of 5 per hour</p>
      <p>The Github repo for the code to my project is located on my <a href="https://github.com/DerekJB1987/wats4030-capstone" target="_blank">Github account</a></p>
  </div>
</template>

<script>
export default {
    name: 'about-project',
};
</script>

<style scoped>
h1, {
  font-weight: normal;
}
p {
  font-size: 16px;
  text-align: center;
  display: block
}
</style>