import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import pattern from './modules/pattern';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  getters,
  modules: {
    pattern
  }
})
