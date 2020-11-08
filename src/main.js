import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Store from './stores/store'

Vue.use(Vuex);

const store=new Vuex.Store(Store);

new Vue({
  el: '#app',
  render: h => h(App),
  store
})
