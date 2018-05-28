<template>
<div class="productlist">

    <main class="deals">
      <ul id="list-of-products">
        <li v-for="product in productList">
          <article class="malabar-spice">
            <a href="#">
              <img src="http://via.placeholder.com/350x250">
            </a>      
            <h2>{{ product.productName }} {{ product.itemPrice }}</h2>    
            <h4>{{ product.productTitle }}</h4>
            <p>{{ product.productDescription}}</p>
            <div class="select-product">
                <button class="isgrey" v-on:click="counter +=1">Read more</button>
                <button class="issecondary" v-on:click="counter +=1">ADD TO CART</button>
            </div>
          </article>    
        </li>
      </ul>

    </main>    


</div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",

  data() {
    return {
      counter: 0,
      productList: {}
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      axios
        .get("http://localhost:3000/ProductList")
        .then(resp => {
          this.productList = resp.data;
          console.log(resp);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/site.scss";
</style>