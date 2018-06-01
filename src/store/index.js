import Vuex from 'vuex'
import Vue from 'vue'
import axios from "axios";

Vue.use(Vuex)


export default new Vuex.Store({

  state: {
    products: [],
    cart: []
  },

  getters: { //computed properties
    products: state => state.products,
    cart: state => state.cart
  },

  actions: { // methods all API will be here
    fetchProducts(context) {
      axios
        .get("https://pincharoma.firebaseio.com/Products.json")
        .then(resp => {
          context.commit('setProducts', resp.data);
          console.log("GOT THE DATA");
        })
        .catch(err => {
          console.log(err);
        });
    },
    //add to cart
    addToCart(context, product) {
      //add product to cart.
      console.log("ADD TO CART ACTION PRODUCT IT " + product)
      context.commit('addToCart', product)
      //else give out of stock message
    }
  },

  mutations: {
    setProducts(state, products) {
      //update products
      console.log(products);
      state.products = products
    },
    addToCart(state, product) {
      state.cart = product
    }

  }
})
