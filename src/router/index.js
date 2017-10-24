import Vue from 'vue'
import Router from 'vue-router'
import AppCart from '@/components/AppCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppCart',
      component: AppCart
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
