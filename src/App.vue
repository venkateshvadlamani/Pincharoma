<template>
  <div id="app">


  <header class="masthead">
    <div class="masthead-inner">

      <div class="site-title">
        <h1>Pinchorama</h1>
      </div>

      <nav class="main-nav">
        <ul class="hor-menu">
          <li><a href="#">About</a></li>
          <li><a href="#">Cart</a></li>
        </ul>
      </nav>

    </div>
  </header>



  <section class="malabar">
    <h2>Malabar</h2>
    <button>Add to Cart</button>
    <img src="">
  </section>

  <section class="bombay-street">
    <h2>Bombay Street</h2>
    <button>Add to Cart</button>
    <img src="">
  </section>

  <section class="jaipur">
    <h2>Jaipur</h2>
    <button>Add to Cart</button>
    <img src="">
  </section>

  <section class="biryani">
    <h2>Biryani</h2>
    <button>Add to Cart</button>
    <img src="">
  </section>

  <section class="udupi">
    <h2>Udupi</h2>
    <button>Add to Cart</button>
    <img src="">
  </section>

  <section class="tandoor">
    <h2>Tandoor</h2>
    <button>Add to Cart</button>
    <img src="">
  </section>


  <section class="samosa">
    <h2>Samosa</h2>
    <button>Add to Cart</button>
    <img src="">
  </section>


  <section class="flavor-profile">
    <h2>Tell us your flavor profile</h2>
    <p>Thai</p>
    <p>Mexican</p>
    <p>Italian</p>
  </section>

  <section>
    Pinterest

    Instagram    
  </section>

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
