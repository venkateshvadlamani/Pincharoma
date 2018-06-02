<template>
  <div class="test">
    <h1 class="title">Different Experiments from Jen Simmons lab</h1>

    <section class="media-query-test">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
    </section>

    <section class="rafaelaferro">
      grid-auto-flow, minmax(), auto-fill, auto-fit, grid-auto-rows and grid-auto-columns
      
        object-fit property to specify how an img or video should be resized to fit its 
        container. If we set it to cover, the images will fill their entire container without 
        leaving blanks nor being distorted. This is why we defined heights for the tracks; 
        we want the photos to adjust to the container and not the other way around!
        
        learnto use grid areas for resposive 
    </section>


  </div>
</template>

<script>
export default {
  name: "Test"
};
</script>

<style lang="scss" scoped>
@import "../styles/test.scss";
</style>