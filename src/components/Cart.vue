<template>
  <div class="cart">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Cart",
  computed: {
    cart: function() {
      return this.$store.getters.cart;
    }
  },
  created() {
    store.dispatch("fetchProducts");
  }
};
</script>