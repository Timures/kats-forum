import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import Posts from './components/Posts'
import Comments from './components/Comments'
import Users from './components/Users'

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component ('posts-template', Posts)
Vue.component ('comments-template', Comments)
Vue.component ('users-template', Users)

Vue.use(VueAxios, axios)
// Install BootstrapVue
Vue.use(BootstrapVue)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
