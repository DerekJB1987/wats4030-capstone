<template>
  <div class="speaker">
    <h2>Let's talk like {{translation}}</h2>
    <p>
      <!-- <router-link v-bind:to="'translator'">Translator</router-link> -->
      <!-- <br>
      <router-link v-bind:to="'/'">Yoda Speak</router-link>
      <br>
      <router-link v-bind:to="'dothrakispeak'">Dothraki Speak</router-link>
      <br>
      <router-link v-bind:to="'piratespeak'">Pirate Speak</router-link>
      <br>
      <router-link v-bind:to="'shakespearespeak'">Shakespeare Speak</router-link>
      <br>
      <router-link v-bind:to="'vulcanspeak'">Vulcan Speak</router-link>
      <br> -->
    </p>

    <form v-on:submit.prevent="translate">
      <p>
        Type your text below to convert to {{translation}}
        <input type="text" v-model="text">
        <button type="submit">Translate</button>
      </p>
    </form>

    <div v-if="results && results.contents">
      <p>{{results.contents.translated}}</p>
    </div>
 
    <figure>
        <img :src="'./docs/assets/img' + translation + '.jpg'" :alt="translation" srcset="">
    </figure>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "speaker",
  props: ["translator"],
  data() {
    return {
      translated: "",
      text: "",
      results: null,
      errors: [],
      translation: null,
      images: {
          yoda: 'yoda.jpg'
      }
    };
  },

  created: function() {
    this.translation = this.$route.params.translator;
  },

  methods: {
    translate: function() {
      console.log("May The Force Be With You");
      axios
        .get(
          `https://api.funtranslations.com/translate/${this.translation}.json`,
          {
            params: {
              text: this.text
            }
          }
        )
        .then(response => {
          this.results = response.data;
          console.log(this.results);
        })
        .catch(error => {
          this.errors.push(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.speaker {
  font-size: 1.4rem;
}

input[type="text"] {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 300px;
  font-size: 1.4rem;
  color: #2c3e50;
  font-weight: 300;
  background: rgba(0, 0, 0, 0.02);
  padding: 0.5rem;
}
button {
  background: #333;
  padding: 0.5rem;
  font-weight: 300;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
}
h1,
h2 {
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
  background: rgba(0, 0, 0, 0.7);
}

a {
  color: #42b983;
}
</style>