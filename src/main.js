import Vue from "vue";
import App from "./App";
import router from "./Router";
import store from "./store/index";
import vuefire from 'vuefire';

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  vuefire,
  template: "<App/>",
  components: {
    App
  }
});
