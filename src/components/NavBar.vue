<template>

  <header class="masthead">    
    <div class="masthead-inner">
      <nav class="main-nav">
        <ul class="hor-menu">
          <li><a href="#"><router-link to="/">HOME</router-link></a></li>
          <li><a href="#"><router-link :to="{name: 'About'}">ABOUT</router-link></a></li>
          <!-- 
          <li><a href="#"><router-link :to="{name: 'Cart'}">CART</router-link></a></li>
          -->
          <li><a href="#"><router-link to="/signup">SIGNUP</router-link></a></li>
        </ul>
      </nav>
      <div class="site-title">
        <h1 class="title">CANON</h1>
      </div>
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