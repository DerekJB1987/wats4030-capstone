<template>

  <div class="translator">
    <!-- added router links -->
    <p>
      <!-- <router-link v-bind:to="'/'">Translator</router-link><br> -->
      <!-- <router-link v-bind:to="'yodaspeak'">Yoda Speak</router-link><br>
      <router-link v-bind:to="'dothrakispeak'">Dothraki Speak</router-link><br>
      <router-link v-bind:to="'piratespeak'">Pirate Speak</router-link><br>
      <router-link v-bind:to="'shakespearespeak'">Shakespeare Speak</router-link><br>
      <router-link v-bind:to="'vulcanspeak'">Vulcan Speak</router-link><br>
      <router-link v-bind:to="'yodaspeak'">Yoda Speak</router-link><br> -->
      <router-link to='/speaker/yoda'>Yoda</router-link><br>
      <router-link to='/speaker/pirate'>Pirate</router-link><br>
      <router-link to='/speaker/dothraki'>Dothraki</router-link><br>
      <router-link to='/speaker/shakespeare'>Shakespeare</router-link><br>
      <router-link to='/speaker/vulcan'>Vulcan</router-link><br>
    </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'translator',
  data () {
    return {
      selected: null,
      options: [
          {id: 'dothrakispeak'},
          {id: 'piratespeak'},
          {id: 'shakespearespeak'},
          {id: 'vulcanspeak'},
          {id: 'yodaspeak'}
      ]
    }
  },

  methods: {
    translate: function(){
      axios.get('https://api.funtranslations.com/translate/',{
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
.translator {
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
a:link {
  text-decoration: none;
  color: black;
  padding: 0.5px;
  text-transform: uppercase;
}
a:hover {
  cursor: pointer;
}
</style>
