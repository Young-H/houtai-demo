import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入注册模块
import Login from '../views/Login.vue'
// 引入首页模块
import Home from '../views/Home.vue'
// 引入用户模块
import Users from '../views/users/users.vue'
// 引入权限管理模块
import Rights from '../views/right/rights.vue'
import Roles from '../views/right/roles.vue'
// 引入商品管理模块
import CateGories from '../views/product/categories.vue'
import Goods from '../views/product/goods.vue'
import Params from '../views/product/params.vue'
// 引入订单管理模块
import Order from '../views/orders/order.vue'
// 引入数据统计模块
import Reports from '../views/datas/reports.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '/users', component: Users },
      { path: '/rights', component: Rights },
      { path: '/roles', component: Roles },
      { path: '/categories', component: CateGories },
      { path: '/goods', component: Goods },
      { path: '/params', component: Params },
      { path: '/orders', component: Order },
      { path: '/reports', component: Reports }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 配置路由导航
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.path === '/login' || token) {
    next()
  } else {
    next('/login')
  }
})

export default router
