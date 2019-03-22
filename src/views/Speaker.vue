<template>
  <div class="speaker">
    <h2>Let's talk like {{translation}}</h2>

    <form v-on:submit.prevent="translate">
      <p>
        Type your text below to convert to {{translation}}
        <input type="text" v-model="text">
        <button class="btn btn-primary" type="submit" onClick="_gaq.push(['_trackEvent','Button Clicked', Click', Translate');">Translate</button>
      </p>
    </form>

    <div v-if="results && results.contents">
      <p>{{results.contents.translated}}</p>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import VueAnalytics from 'vue-analytics'

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
    };
  },

  created: function() {
    this.translation = this.$route.params.translator;
  },

  methods: {
    translate: function() {
      console.log("Who am I speaking with?");
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
      ga('send', {
        hitType: 'event',
        eventCategory: 'button',
        eventAction: 'click'
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.speaker {
  font-size: 1.5rem;
}

input[type="text"] {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 400px;
  font-size: 1.5rem;
  color: #000000;
  font-weight: 300;
  background: rgba(0, 0, 0, 0.02);
  padding: 0.5rem;
}
button {
  background: #2d2423;
  padding: 0.5rem;
  font-weight: 300;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
}
p {
  color: #000000;
}
</style>