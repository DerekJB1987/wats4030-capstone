<template>
  <div class="container">
      <h1>About Derek's Galactic Translator</h1><br>
      
      <p>Derek's Galactic Translator is a capstone project for the <a href="https://ncs.seattleu.edu/programs-courses/web-development/">Seattle University Web Development Certificate Program</a></p>
      <p>I decided to use <a href="https://vuejs.org/">Vue.js</a>since it is the JavaScript framework that is taught to all students in the program and helps practice learning how to code in JavaScript.<p> 
      <p>My project also uses BootStrap 4 to aid in styling and CSS as well as practice my Bootstrap skills that was taught briefly earlier in the program.</p>
      <p> Derek's Galactic Translator uses the <a href="https://funtranslations.com/#">Fun Translations API</a> to send a text input by the user to the third party API site and return a JSON translation for the user to view.</p>
      <p>To analyze my project for user accessibility, I checked it with <a href="https://wave.webaim.org/">WAVE</a> by using their URL Dinolytics feature.</p>
      <p>The Github repo for the code to my project is located at <a href="https://github.com/DerekJB1987/wats4030-capstone" target="_blank">wats4030-capstone</a></p></p>
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