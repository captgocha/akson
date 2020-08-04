import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityes: [],
    searchCityValue: ''
  },
  mutations: {
    SET_CITYES_TO_VUEX: (state, cityes) => {
      state.cityes = cityes;
    },
    SET_SEARCH_CITY_TO_VUEX: (state, value) => {
      state.searchCityValue = value;
    },
    CLEAR_SEARCH_CITY_VALUE: (state, searchCityValue) => {
      state.searchCityValue = ''
    }
  },
  actions: {
    GET_CITYES_FROM_API({commit}) {
      return axios('http://localhost:3000/cityes', {
        method: 'GET'
      })
        .then((response) => {
          commit('SET_CITYES_TO_VUEX', response.data)
        })
    },
    GET_SEARCH_CITY_TO_VUEX({commit}, value) {
      commit('SET_SEARCH_CITY_TO_VUEX', value)
    },
    GET_CLEAR_SEARCH_CITY_VALUE({commit}) {
      commit('CLEAR_SEARCH_CITY_VALUE')
    }
  },
  getters: {
    CITYES(state) {
      return state.cityes;
    },
    SEARCH_CITY_VALUE(state) {
      return state.searchCityValue;
    }
  }
})
