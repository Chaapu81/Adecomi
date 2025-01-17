import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/scss/bootstrap.scss';
import './css/estilos.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
