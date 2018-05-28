import Vue from "vue";
import App from "./App";
import router from "./Router";
import store from "./store/index";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: {
    App
  }
});
