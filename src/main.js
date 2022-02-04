import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretRight, faPlusCircle, faAdjust, faTh, fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import BootstrapVue from 'bootstrap-vue'
require("./plugins")
import "./scss/_main.scss"
library.add(faCaretRight, faPlusCircle, faAdjust, faTh, fas)
Vue.use(BootstrapVue)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
