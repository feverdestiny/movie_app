import Vue from 'vue'
import App from './App'
import http from '@/utils/http/interface'
import config from '@/config'
Vue.config.productionTip = false
Vue.prototype.$config = config
Vue.prototype.$http = http
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
