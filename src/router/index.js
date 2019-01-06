import Vue from 'vue'
import Router from 'vue-router'
import login1 from '../components/loginpwd.vue'
import login2 from '../components/loginic.vue'
import login3 from '../components/register.vue'
import main from '../components/main.vue'
import gallery from '../components/gallery.vue'
import shopping from '../components/shopping.vue'
import create from '../components/create.vue'
import my from '../components/my.vue'
import search from '../components/search.vue'
import result from '../components/result.vue'
import assess from '../components/no_assess.vue'
import network from '../components/no_network.vue'
import vouchers from '../components/no_vouchers.vue'
import collect from '../components/no_collect.vue'
import thing from '../components/no_thing.vue'
import empty from '../components/empty.vue'
import no_search from '../components/no_search.vue'
import detail from '../components/detail.vue'
import detail_main from '../components/detail_main.vue'
import evaluate from '../components/evaluate.vue'
import details from '../components/details.vue'
import message from '../components/message.vue'
import market from '../components/market.vue'
import my_collect from '../components/my_collect.vue'
import my_voucher from '../components/my_voucher.vue'
import no_used from '../components/no_used.vue'
import used from '../components/used.vue'
import refund from '../components/refund.vue'
import address from '../components/address.vue'
import add_address from '../components/add_address.vue'
import edit_address from '../components/edit_address.vue'
import my_order from '../components/my_order.vue'
import result_hot from "../components/result_hot";
import result_price from "../components/result_price";
import result_new from "../components/result_new";
import result_default from "../components/result_default";
import checkout from '../components/checkout.vue'
import order from '../components/order.vue'
import order_main from '../components/order_main.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login1',
      component: login1
    },
    {//需要跳转的页面
      path: '/IC',
      name: 'login2',
      component: login2//组件名字
    },
    {
      path: '/register',
      name: 'register',
      component: login3
    },
    {
      path: '/main',
      component: main,
      children: [
        {
          path: '/',
          name: 'gallery',
          component: gallery
        },
        {
          path: 'shop',
          name: 'shop',
          component: shopping
        },
        {
          path: 'create',
          name: 'create',
          component: create
        },
        {
          path: 'my',
          name: 'my',
          component: my
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/result',
      component: result,
      children: [
        {
          path: '/result/default',
          name: 'result_default',
          component: result_default
        },
        {
          path: '/result/new',
          name: 'result_new',
          component: result_new
        },
        {
          path:'/result/hot',
          name: 'result_hot',
          component: result_hot
        },
        {
          path:'/result/price',
          name: 'result_price',
          component: result_price
        }
      ]
    },
    {
      path: '/assess',
      name: 'assess',
      component: assess
    },
    {
      path: '/network',
      name: 'network',
      component: network
    },
    {
      path: '/vouchers',
      name: 'vouchers',
      component: vouchers
    },
    {
      path: '/collect',
      name: 'collect',
      component: collect
    },
    {
      path: '/thing',
      name: 'thing',
      component: thing
    },
    {
      path: '/empty',
      name: 'empty',
      component: empty
    },
    {
      path: '/no_search',
      name: 'no_search',
      component: no_search
    },
    {
      path: '/detail',
      component: detail,
      children: [
        {
          path: '/',
          name: 'detail_main',
          component: detail_main
        },
        {
          path: 'evaluate',
          name: 'evaluate',
          component: evaluate
        },
        {
          path: 'details',
          name: 'details',
          component: details
        }
      ]
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/market',
      name: 'market',
      component: market
    },
    {
      path: '/my_collect',
      name: 'my_collect',
      component: my_collect
    },
    {
      path: '/my_voucher',
      component: my_voucher,
      children: [
        {
          path: '/',
          name: 'no_used',
          component: no_used
        },
        {
          path: 'used',
          name: 'used',
          component: used
        }]
    },
    {
      path: '/refund',
      name: 'refund',
      component: refund
    },
    {
      path: '/address',
      name: 'address',
      component: address
    },
    {
      path: '/add_address',
      name: 'add_address',
      component: add_address
    },
    {
      path: '/edit_address',
      name: 'edit_address',
      component: edit_address
    },
    {
      path: '/my_order',
      name: 'my_order',
      component: my_order
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: checkout
    },
    {
      path:'/order',
      component:order,
      children:[
      {
        path:'/',
        name:'order_main',
        component:order_main
      }]
    }
  ]
})
