import Vue from 'vue'
import Router from 'vue-router'
import Translator from '@/views/Translator'
import NavBar from '@/views/NavBar'
import YodaSpeak from '@/views/YodaSpeak'
import DothrakiSpeak from '@/views/DothrakiSpeak'
import PirateSpeak from '@/views/PirateSpeak'
import ShakespeareSpeak from '@/views/ShakespeareSpeak'
import VulcanSpeak from '@/views/VulcanSpeak'
import Speaker from '@/views/Speaker'
import AboutMe from '@/AboutMe'
import AboutProject from '@/AboutProject'
// TODO: Import new component

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Translator',
      component: Translator
    },
    {
      path: '/yodaspeak',
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
    },
    {
      path: '/speaker/:translator',
      component: Speaker,
      props: true
    },
    {
      path: '/aboutme',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/aboutproject',
      name: 'AboutProject',
      component: AboutProject
    },
    {
      path: 'navbar',
      name: 'NavBar',
      component: NavBar
    }
    // TODO: Add new route definition here.
  ]
})
