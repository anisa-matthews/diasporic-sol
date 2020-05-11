import Vue from 'vue'
import Router from 'vue-router'
import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Home from '@/components/Home'
import Entries from '@/components/Entries'
import Entry from '@/components/Entry'
import About from '@/components/About'
import Mission from '@/components/Mission'
import Contact from '@/components/Contact'

import Admin from '@/components/Admin'
import Add from '@/components/Add'
// import Login from '@/components/Login'

Vue.use(Router)
Vue.use(BootstrapVue)

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
    },
    {
      path: '/entries/:id',
      name: 'Entry',
      component: Entry
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/mission',
      name: 'Mission',
      component: Mission
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/admin/new',
      name: 'Add',
      component: Add
    }
  ]
})
