import Vuex from 'vuex'
import Vue from 'vue'
import axios from "axios";

Vue.use(Vuex)


export default new Vuex.Store({

  state: {
    products: []
  },

  getters: { //computed properties
    products: state => state.products
  },

  actions: { // methods all API will be here
    fetchProducts(context) {
      axios
        .get("http://localhost:3000/ProductList")
        .then(resp => {
          context.commit('setProducts', resp.data);
        })
        .catch(err => {
          console.log(err);
        });

      //add to cart
      //addToCart(context, product) {
        //add product to cart.

        //else give out of stock message
      //}

    }
  },

  mutations: {
    setProducts(state, products) {
      //update products
      state.products = products
    }

  }
})
