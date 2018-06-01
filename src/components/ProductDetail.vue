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
        .get("https://pincharoma.firebaseio.com/Products/" + this.$route.params.id + ".json/")
        .then(resp => {
          this.productDetail = resp.data;
          console.log(resp.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>