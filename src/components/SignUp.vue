<template>
  <div class="signup">

    <main>
        <section class=signup-wrapper>

            <form action="/catalog" class="form-wrapper">
              <label class="email" for="email">Email:</label>
              <input type="text" name="firstname" placeholder="mickey@example.com" class="email block" v-model=signUpModel.email required>
              <label class="password" for="password">Password:</label>
              <input type="password" name="password" placeholder="password" class="password block" v-model=signUpModel.password required>
              <div class="g-recaptcha" data-sitekey="6LfpOF0UAAAAAK6KONqklR12-yktIQg8coz3Rp9b"></div>
              <button type="submit" class="button isprimary-inverted half-block signup">Sign Up</button>
            </form> 

        </section>
    </main>
    <pre>{{ products }}</pre>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      signUpModel: {}
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/signup.scss";
</style>