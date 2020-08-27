import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'
import {routes} from './routes'
import store from './store/store'
import {env} from '../APIKEY'

Vue.use(VueRouter)
Vue.use(VueResource)
const key = env.FIREBASE_KEY
Vue.http.options.root = key

Vue.filter('currency', (value) =>{
  return '$' + value.toLocaleString();
}) 

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
