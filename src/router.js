import Vue from 'vue'
import Router from 'vue-router'
import YodaSpeak from '@/views/Yodaspeak'
// TODO: Import new component

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Yodaspeak',
      component: Yodaspeak
    }
    // TODO: Add new route definition here.
  ]
})
