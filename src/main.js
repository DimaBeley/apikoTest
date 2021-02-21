import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/eye'
import 'vue-awesome/icons/eye-slash'
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)
Vue.config.productionTip = false

Vue.component('v-icon', Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
