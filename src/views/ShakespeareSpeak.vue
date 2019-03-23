<template>
  <div class="shakespearespeak">

    <form v-on:submit.prevent="translate">
      <p>Type your text below to convert to Shakespeare
        <input type="text" v-model="text">
        <button type="submit">Translate</button>
      </p>
    </form>

    <div v-if="results && results.contents">
      <p>{{results.contents.translated}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Shakespearespeak",
  data() {
    return {
      translated: "",
      text: "",
      translation: "shakespeare",
      results: null,
      errors: []
    };
  },

  methods: {
    translate: function() {
      console.log("To be or not to be!");
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

</style>