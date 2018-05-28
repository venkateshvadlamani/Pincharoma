<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <main class="deals">
      <article class="malabar-spice">
        <a href="#">
          <img src="http://via.placeholder.com/350x250">
        </a>      
        <h2>Malabar Spice</h2>    
        <h4>Pincharoma Malabar Curry powder, 2 oz</h4>
        <p>Description</p>
        <button>ADD TO CART</button>
      </article>    
    </main>    
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "Home"
    };
  }
};
</script>