import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
//store data, getting data, change data in one single centrailzed place
export default new Vuex.Store({
  state: {
    counter: 0,
    colorCode: 'blue'
  },
  mutations: {
    //change the data in the state by commiting an mutation
    //can't create asynschronous code
    increaseCounter(state, randomNumber) {
      state.counter += randomNumber
    },
    decreaseCounter(state, randomNumber) {
      state.counter -= randomNumber
    },
    setColorCode(state, newValue) {
      state.colorCode = newValue
    }
  },
  actions: {
    //dispatch
    //can't change data 
    //commit mutations then chg data
    //can create asynchronous code
    increaseCounter( {commit} ) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        // console.log('response', response);
        commit('increaseCounter', response.data);
      })
    },
    decreaseCounter( {commit} ) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        // console.log('response', response);
        commit('decreaseCounter', response.data);
      })
    },
    setColorCode({commit}, newValue) {
      commit('setColorCode', newValue);
    }
  },
  getters: {
    //get data from state
    //filter data
    counterSquared(state) {
      return state.counter * state.counter
    }
  },
  modules: {

  }
})
