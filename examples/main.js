import Vue from 'vue'
import App from './App.vue'
import VueLargerImage from '../VueLargerImage'

Vue.use(VueLargerImage)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
