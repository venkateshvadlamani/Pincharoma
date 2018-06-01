import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import Cart from '../components/Cart'
import ProductDetail from '../components/ProductDetail'
import Catalog from '../components/Catalog'
import Test from '../components/Test'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/catalog',
      name: 'Catalog',
      component: Catalog
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/productdetail/:id',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/test/',
      name: 'Test',
      component: Test
    }


  ]
})
