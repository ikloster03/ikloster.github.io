// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueProgressiveImage from 'vue-progressive-image'
import VModal from 'vue-js-modal'
import App from './App';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'mdbootstrap/css/mdb.css';
import './components/Waves.css';

Vue.use(VueProgressiveImage)
Vue.use(VModal)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
