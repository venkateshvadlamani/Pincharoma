<template>
  <div id="app">

  <nav-bar></nav-bar>
  <router-view></router-view>  

  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "app",
  components: {
    NavBar
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./styles/reset.scss";
</style>
