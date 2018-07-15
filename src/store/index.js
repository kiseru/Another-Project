import Vue from 'vue';
import Vuex from 'vuex';

import pattern from './modules/pattern';
import state from './state';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state,
  modules: {
    pattern
  }
})
