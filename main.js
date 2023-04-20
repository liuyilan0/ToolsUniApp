import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()

var QQMapWX = require('qqmap-wx-jssdk');
// 实例化API核心类
var qqmapsdk = new QQMapWX({
	key: 'UPKBZ-37IKW-Z4MRK-RDA4Y-M2OAS-24BLU'
});
Vue.prototype.$qqmapsdk = qqmapsdk;
