<template>
<div class="catalog">
  
    <div class="deals">

      <ul id="list-of-products">
        <li v-for="product in productList" v-bind:key="product.id">
          <article class="product">
            <div class="productimage">
              <a href="#">
                <router-link :to="{name:'ProductDetail', params:{id:product.id}}">
                  <img src="http://via.placeholder.com/250x150">
                </router-link>
              </a>      
            </div>

            <div class="productdetails">
              <div class="title">
                <h2>{{ product.productTitle }}</h2> 
              </div>   
                <div class="price">                  
                <h1>Price: {{ product.itemPrice }}</h1>
              </div>
              <div class="select-product">
                  <router-link :to="{name:'ProductDetail', params:{id:product.id}}">
                    <button class="isgrey">Read more</button>
                  </router-link>
                  <button class="issecondary" v-on:click="addToCart(product.id)">Add to Cart</button>
              </div>
            </div>
          </article>    
        </li>
      </ul>

    </div>    

<pre>{{productList}}</pre>

</div>
</template>

<script>
import store from "../store/index.js";

export default {
  name: "Catalog",
  computed: {
    productList: function() {
      return this.$store.getters.products;
    }
  },
  created() {
    store.dispatch("fetchProducts");
  },
  methods: {
    addToCart: function(productID) {
      store.dispatch("addToCart", productID);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/site.scss";
</style>