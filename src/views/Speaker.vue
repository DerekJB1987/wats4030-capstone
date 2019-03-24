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

import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-129082739-2',
  checkDuplicateScript: true
});

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