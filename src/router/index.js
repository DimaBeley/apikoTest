import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Main from '../components/Main.vue'
import Registration from '../components/Login/Registration'
import Login from '../components/Login/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/registration',
        name: 'Registration',
        component: Registration
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
