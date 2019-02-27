<template>
  <div class="piratespeak">
    <!-- added router links -->
    <p>
      <router-link v-bind:to="'translator'">Translator</router-link><br>
      <router-link v-bind:to="'yodaspeak'">Yoda Speak</router-link><br>
      <router-link v-bind:to="'dothrakispeak'">Dothraki Speak</router-link><br>
      <router-link v-bind:to="'/'">Pirate Speak</router-link><br>
      <router-link v-bind:to="'shakespearespeak'">Shakespeare Speak</router-link><br>
      <router-link v-bind:to="'vulcanspeak'">Vulcan Speak</router-link><br>
    </p>

    <form v-on:submit.prevent="translate">
      <p>Type your text below to convert to Pirate Speak <input type="text" v-model="text"><button type="submit">Translate</button></p>
    </form>

    <div v-if= "results && results.contents"><p>{{results.contents.translated}}</p></div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Piratespeak',
  data () {
    return {
      translated: "",
      text: "",
      translation: "pirate",
      results: null,
      errors: []
    }
  },

  methods: {
    translate: function(){
      console.log("Why is the rum gone?")
      axios.get('https://api.funtranslations.com/translate/pirate.json',{
        params: {
          text: this.text
        }
      })
      .then(response => {
        this.results = response.data;
        console.log(this.results)
      })
      .catch(error => {
        this.errors.push(error);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.piratespeak {
  font-size: 1.4rem;
}

input[type="text"]{
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 300px;
  font-size: 1.4rem;
  color: #2c3e50;
  font-weight: 300;
  background: rgba(0,0,0,0.02);
  padding: 0.5rem;
}
button{
  background: #333;
  padding: 0.5rem;
  font-weight: 300;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
}
h1, h2 {
  font-weight: normal;
}

ul.results {
  list-style-type: none;
  padding: 0;
}

.results li {
  display: inline-block;
  margin: 10px;
  border: solid 1px #333;
  padding: 0.5rem;
  width: 200px;
  min-height: 100px;
  color: #fff;
  background: rgba(0,0,0,0.7);
}

a {
  color: #42b983;
}
</style>