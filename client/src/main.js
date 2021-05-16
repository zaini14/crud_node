import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import "./plugins/element.js"
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'


locale.use(lang)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
