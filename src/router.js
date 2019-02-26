import Vue from 'vue'
import Router from 'vue-router'
import YodaSpeak from '@/views/YodaSpeak'
import DothrakiSpeak from '@/views/DothrakiSpeak'
import PirateSpeak from '@/views/PirateSpeak'
import ShakespeareSpeak from '@/views/ShakespeareSpeak'
import VulcanSpeak from '@/views/VulcanSpeak'
// TODO: Import new component

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'YodaSpeak',
      component: YodaSpeak
    },
    {
      path: '/dothrakispeak',
      name: 'DothrakiSpeak',
      component: DothrakiSpeak
    },
    {
      path: '/piratespeak',
      name: 'PirateSpeak',
      component: PirateSpeak      
    },
    {
      path: '/shakespearespeak',
      name: 'ShakespeareSpeak',
      component: ShakespeareSpeak      
    },
    {
      path: '/vulcanspeak',
      name: 'VulcanSpeak',
      component: VulcanSpeak      
    } 
    // TODO: Add new route definition here.
  ]
})
