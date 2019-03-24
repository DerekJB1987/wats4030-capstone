<template>

  <div class="translator">

    <p>
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

.translator {
  font-size: 1.5rem;
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
  color: #333;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
}
h1, h2 {
  font-weight: normal;
}
a:link {
  text-decoration: none;
  color: #1941D8;
  padding: 0.5px;
  text-transform: uppercase;
}
a:hover {
  cursor: pointer;
  text-decoration: underline;
  color: #42f4e5;
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
