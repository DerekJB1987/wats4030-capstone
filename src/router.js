import Vue from 'vue'
import Router from 'vue-router'
import YodaSpeak from '@/views/YodaSpeak'
// TODO: Import new component

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'YodaSpeak',
      component: YodaSpeak
    }
    // TODO: Add new route definition here.
  ]
})
