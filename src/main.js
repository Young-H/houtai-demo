import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
// 引入VueX
import store from './store'
// 引入ElementUi
import ElementUI from 'element-ui'
// 引入ElementUI 样式
import 'element-ui/lib/theme-chalk/index.css'
// 引入ajax
import axios from 'axios'
// 挂载ElmentUI
Vue.use(ElementUI)

// 设置基准地址
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
// 把axios挂载到vue的实例上
Vue.prototype.$axios = axios
// axios 请求拦截器
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 配置请求头。每次发送请求都携带token
  config.headers.Authorization = localStorage.getItem('token')
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
