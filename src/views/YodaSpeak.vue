<template>
  <div class="yodaspeak">
    <!-- added router links -->
    <p>
      <router-link v-bind:to="'/'">YodaSpeak</router-link>
    </p>

    <form v-on:submit.prevent="translate">
      <p>Type your text below to convert to Yodaspeak <input type="text" v-model="results"><button type="submit">Translate</button></p>
    </form>

    <div class = "results-container">
      <ul v-if="results" class="results"></ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Yodaspeak',
  data () {
    return {
      translated: '',
      text: '',
      translation: 'yoda'
    }
  },

  methods: {
    translate: function(){
      console.log("May The Force Be With You")
      axios.get('https://api.funtranslations.com/translate/yoda.json',{
        params: {
          text: this.results
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.yodaspeak {
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
