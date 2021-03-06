// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)
// export const store = new Vuex.Store({
//   state: {
//     products: [
//       { name: "Banana Skin", price: 20 },
//       { name: "Shiny Star", price: 40 },
//       { name: "Green Shells", price: 60 },
//       { name: "Red Shells", price: 80 },
//     ],
//   },
// });
import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state: {
    products: [
      { name: "Banana Skin", price: 20 },
      { name: "Shiny Star", price: 40 },
      { name: "Green Shells", price: 60 },
      { name: "Red Shells", price: 80 },
    ],
  },
  getters: {
    saleProducts: (state) => {
      var saleProducts = state.products.map((product) => {
        return {
          name: "**" + product.name + "**",
          price: product.price / 2,
        };
      });
      return saleProducts;
    },
  },
  mutations: {
    reducePrice: (state) => {
      state.products.forEach((product) => (product.price -= 1));
    },
  },
  actions: {
    reducePrice: (context) => {
      setTimeout(function () {
        context.commit("reducePrice");
      }, 2000);
    },
  },
});
export default store;
