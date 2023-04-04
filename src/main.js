import Vue from "vue";
import App from "./App.vue";
import i18n from "./i18n";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.directive("hoverCar", {
  bind(el) {
    el.addEventListener("mouseover", function () {
      el.style.color = "blue";
    });
    el.addEventListener("mouseout", function () {
      el.style.color = "black";
    });
  },
});

new Vue({
  i18n,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
