import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import PostTemplate from './components/PostTemplate.vue'
import UserTemplate from './components/UserTemplate.vue'
import CommentsTemplate from './components/CommentsTemplate.vue'

Vue.component ('post-template', PostTemplate)
Vue.component ('user-template', UserTemplate)
Vue.component ('comments-template', CommentsTemplate)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
