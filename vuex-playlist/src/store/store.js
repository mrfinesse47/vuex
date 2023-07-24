import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    products: [
      { name: 'Banana Skin', price: 20 },
      { name: 'Shiny Star', price: 40 },
      { name: 'Green Shells', price: 60 },
      { name: 'Red Shells', price: 80 }
    ]
  },
  getters: {
    saleProducts(state) { return state.products.map((product) => ({ name: '**' + product.name + '**', price: product.price / 2 })) }
  },
  mutations: {
    //do not use async operations inside of mutations, actions are more suited for this
    // and even more we dont use mutations in our components rather just use actions just to keep good practice
    reducePrice: (state, payload) => state.products.forEach(product => {
      product.price -= payload
    })
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(() => { context.commit("reducePrice", payload) }, 400)
    }
  },
  modules: {
  }
})
