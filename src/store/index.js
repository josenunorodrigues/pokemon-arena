import Vue from 'vue';
import Vuex from 'vuex';
import State from './state.js'
import Mutations from './mutations.js'
import Actions from './actions.js'
import Getters from './getters.js'
Vue.use(Vuex);

const state = {
  ...State
}

const getters = {
  ...Getters
}

const actions = {
  ...Actions
}

const mutations = {
  ...Mutations
}

export const store = new Vuex.Store({
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations,
})

export default store;