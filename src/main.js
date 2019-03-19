// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;
Vue.use(BootstrapVue)

Vue.use(VueAnalytics, {
  id: 'UA-129082739-2',
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
