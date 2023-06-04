import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })
console.log('this is main js file')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
