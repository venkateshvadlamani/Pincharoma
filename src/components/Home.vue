<template>
<div class="productlist">

    <main class="deals">

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
              <div class="title-price">
                <h2>{{ product.productTitle }}</h2>    
                <h1>Price: {{ product.itemPrice }}</h1>
              </div>
              <div class="select-product">
                  <router-link :to="{name:'ProductDetail', params:{id:product.id}}">
                    <button class="isgrey">Read more</button>
                  </router-link>
                  <button class="issecondary" v-on:click="counter +=1">Add to Cart</button>
              </div>
            </div>
          </article>    
        </li>
      </ul>

    </main>    


</div>
</template>

<script>
import store from "../store/index.js";

export default {
  name: "Home",
  computed: {
    productList: function() {
      return this.$store.getters.products;
    }
  },
  created() {
    store.dispatch("fetchProducts");
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/site.scss";
</style>