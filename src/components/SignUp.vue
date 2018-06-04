<template>
  <div class="signup">

    <main>
        <section class=signup-wrapper>

            <form action="/catalog" class="form-wrapper">
              <label class="email" for="email">Email:</label>
              <input type="text" name="firstname" placeholder="mickey@example.com" class="email block" required>
              <div class="g-recaptcha" data-sitekey="6LfpOF0UAAAAAK6KONqklR12-yktIQg8coz3Rp9b"></div>
              <button type="submit" class="button isprimary half-block signup">Sign Up</button>
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