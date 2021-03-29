import VueLargerImage from './src'
import _Vue from 'vue';
VueLargerImage.install = function (Vue) {
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue = Vue = _Vue
  }
  Vue.component(VueLargerImage.name, VueLargerImage)
}

export default VueLargerImage
