<template>
  <div id="app">


  <header class="masthead">
    <div class="masthead-inner">

      <div class="site-title">
        <h1>Pincharoma</h1>
      </div>

      <nav class="main-nav">
        <ul class="hor-menu">
          <li><a href="#"><router-link to="/">Home</router-link></a></li>
          <li><a href="#"><router-link :to="{name: 'About'}">About</router-link></a></li>
          <li><a href="#"><router-link :to="{name: 'Contact'}">Contact</router-link></a></li>
          <li><a href="#"><router-link :to="{name: 'Cart'}">Cart</router-link></a></li>
        </ul>
      </nav>

    </div>
  </header>
  
  <router-view></router-view>  


  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./styles/site.scss";
</style>
