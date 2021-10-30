import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// ==> Uri da api (Back-End)
// uri = 'http://localhost:3306/api'
// uri = 'https://localhost:5001/docs/index.html'
