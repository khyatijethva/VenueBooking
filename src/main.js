import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import LottieVuePlayer from "@lottiefiles/vue-lottie-player";

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.use(LottieVuePlayer);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
