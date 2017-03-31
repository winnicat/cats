import Vue from 'vue'
import App from './App'
import Home from './components/Home.vue'
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


//注册两个插件（路由和XHR请求）
Vue.use(VueResource)
Vue.use(VueRouter)

//创建一个路由器实例
var router = new VueRouter()

//定义路由规则
router.map({
	'/home':{
		component: Home
	},
	'/time-entries':{
		component: TimeEntries,
		subRoutes: {
			'log-time': {
				component: LogTime
			}
		}
	}
})

//重定向
router.redirect({
	'*':'/home'
})

router.start(App, '#app')
/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
