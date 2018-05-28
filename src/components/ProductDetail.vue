<template>
  <div class="productdetail">
      <pre>{{ productDetail }}</pre>
  </div>
</template>

<script>
// Debug: currently just hitting the ProductList table.
// Check with Product Detail and add appropriate data
import axios from "axios";
export default {
  name: "ProductDetail",
  data() {
    return {
      productDetail: {}
    };
  },
  created() {
    console.log(this.$route.params.id);
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("http://localhost:3000/ProductList/" + this.$route.params.id + "/")
        .then(resp => {
          this.productDetail = resp.data;
          console.log(resp);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>