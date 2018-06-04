<template>
  <div class="signup">

    <main>
        <section class=signup-wrapper>

          <div class="signup-form">
            <form action="/action_page.php">
              First name: <input type="text" name="firstname" value="Mickey">
              <br>
              Last name: <input type="text" name="lastname" value="Mouse">              
              <br><br>
              <button type="submit" class="isgrey">Sign Up</button>
            </form> 
          </div>


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