import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Entries from '@/components/Entries'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/entries',
      name: 'Entries',
      component: Entries
    }
  ]
})
