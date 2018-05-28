<template>

  <header class="masthead">
    <div class="masthead-inner">

      <div class="site-title">
        <h1>Pincharoma</h1>
      </div>

      <nav class="main-nav">
        <ul class="hor-menu">
          <li><a href="#"><router-link to="/">Home</router-link></a></li>
          <li><a href="#"><router-link :to="{name: 'About'}">About</router-link></a></li>
          <li><a href="#"><router-link :to="{name: 'Cart'}">Cart</router-link></a></li>
        </ul>
      </nav>

    </div>
  </header>
  
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style lang="scss" scoped>
@import "../styles/navbar.scss";
</style>