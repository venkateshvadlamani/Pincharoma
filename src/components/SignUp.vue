<template>
  <div class="signup">

    <main>
        <section class=signup-wrapper>
          <form>
            <input type=email id="email" /> EMAIL :
            <input type=password id="email" /> PASSWORD : 
            <input type=button
          </form>        
        </section>
    </main>

  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      msg: "SignUp"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/signup.scss";
</style>