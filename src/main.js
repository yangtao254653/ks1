import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUi from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import myplugins from '@/plugins/myplugins';

Vue.config.productionTip = false;
Vue.use(ElementUi);
Vue.use(myplugins);

if (process.env.NODE_ENV === "development") {
  require("./mock");
}
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
