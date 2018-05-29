<template>
  <div class="cart">
    <h1>{{ cart }}</h1>
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
};
</script>