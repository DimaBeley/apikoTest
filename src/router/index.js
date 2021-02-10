import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Registration from '../components/Login/Registration'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registration',
    name: 'Registration',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Registration
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login/Login')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
