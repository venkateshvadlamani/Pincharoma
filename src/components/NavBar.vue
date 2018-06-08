<template>

  <header class="masthead">
    <div class="masthead-outer">
    </div>
    <div class="masthead-inner">
      <div class="nav-outer">
        <nav class="main-nav">
          <ul class="hor-menu">
            <!--             
            <li><a href="#"><router-link :to="{name: 'About'}">ABOUT</router-link></a></li>
            <li><a href="#"><router-link :to="{name: 'Cart'}">CART</router-link></a></li>
            -->
            <li><a href="#"><router-link to="/">HOME</router-link></a></li>
            <li><a href="#"><router-link to="/signup">SIGNUP</router-link></a></li>
          </ul>
        </nav>

      </div>
      <div class="site-logo">
        <div class="cannon-wrapper">
          <div class="cannon">&#9679&#9679&#10134</div>
        </div>
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