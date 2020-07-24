import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import base from './modules/base'

const store = new Vuex.Store({
  ...base,
  modules: {}
});

export default store
