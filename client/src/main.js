import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate';
import vuetify from './plugins/vuetify'
import moment from 'moment'

Vue.config.productionTip = false
Vue.use(VeeValidate);

new Vue({
  router,
  store,
  vuetify,
  moment,
  render: h => h(App)
}).$mount('#app')