<template>
  <div class="home">

    <main class="deals">

      <article class="sale-item">
        <h1>GUIDE TO CHEESE KNIVES</h1>
        <ul>
          <li>CHEESES COME IN MANY SHAPES, SIZES AND TEXTURES - 
            THE RIGHT KNIFE MAKES ALL THE DIFFERENCE</li>
        </ul>
        <a class="button isprimary-inverted" href="https://www.pinterest.com/pin/349169777355076852/">READ MORE</a>
      </article>
      
      <article class="sale-item">
        <h1>ORANGE AND CASHEW CHICKEN STIR FRY</h1>
        <ul>
          <li>PREP TIME: 15 MIN</li>
          <li>TOTAL TIME: 35 MIN</li>
          <li>CALORIES PER SERVING: 670</li>
        </ul>
        <a class="button isprimary-inverted">READ MORE</a>
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

<style lang="scss" scoped>
@import "../styles/home.scss";
</style>