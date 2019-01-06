// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueProgressBar from 'vue-progressbar'
import VueScroller from 'vue-scroller'

Vue.use(VueScroller);
Vue.config.productionTip = false;
Vue.prototype.$http= axios;
Vue.use(router);
Object.assign(axios.defaults,{
  baseURL:'http://vanxnf.utools.club'
  // headers:{
  //   common:{'Authorization':"AUTH_TOKEN"}
  // }
});
/* eslint-disable no-new */
const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '10px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  position:"absolute",
  location: 'top',
  inverse: false
}
Vue.use(VueProgressBar, options);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app');
