<template>
  <div class="experiments">
    <h1>{{ msg }}</h1>


<hr>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 400">
<title>Starbucks Coffee Logo</title>
<defs>
    <path d="M15,100a85,85 0 1,0 170,0a85,85 0 1,0 -170,0" id="coffeecircle" />
    <path d="M100,37c34.8,0,63,28.2,63,63s-28.2,63-63,63s-63-28.2-63-63S65.2,37,100,37z" id="starbuckscircle" transform="rotate(-85 100 100)" />
</defs>
<circle cx="100" cy="100" r="100" fill="#067655" id="background" />
<circle fill="none" stroke="#FFF" cx="100" cy="100" r="93.8" stroke-width="3" id="rim" />
<text>
    <textPath xlink:href="#starbuckscircle">Starbucks</textPath>
</text>
<text dx="55" textLength="160" class="coffee">
    <textPath xlink:href="#coffeecircle">Coffee</textPath>
</text>
</svg>

    
  </div>
</template>

<script>
export default {
  name: "TextExperiments",
  data() {
    return {
      msg: "TextExperiments"
    };
  }
};
</script>

<style lang="css" scoped>
text {
  font-family: Santana-Black, sans-serif;
  fill: #fff;
  text-transform: uppercase;
  font-size: 32px;
}
.coffee {
  letter-spacing: 6px;
}
</style>