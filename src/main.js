import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import routes from './routes';
import store from './store';

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
