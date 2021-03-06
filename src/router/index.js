import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Registration from '../components/Login/Registration'
import Login from '../components/Login/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
