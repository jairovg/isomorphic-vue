import Vue from 'vue';
import VueRouter from 'vue-router';
import login from './components/login';
import products from './components/products';

Vue.use(VueRouter);

/**
 * Factory function for creating new routers
 * with each request
 * 
 * @returns { VueRouter }
 */
function createRouter() {
  var routes = [
    { path: '/', component: products },
    { path: '/login', component: login },
    { path: '/products', component: products },
    { path: '*', redirect: '/' }
  ];
  
  return new VueRouter({ routes });
}


export default createRouter;