import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueRouter from 'vue-router'

var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo)

import RequestView from './components/RequestView';
import MarkdownView from './components/MarkdownView';
Vue.use(Buefy)
Vue.use(VueRouter)
Vue.component('markdown-view', MarkdownView);
Vue.config.productionTip = false

const routes = [
  { path: '/api/*', component: RequestView, props: true }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
}).$mount('#app')
