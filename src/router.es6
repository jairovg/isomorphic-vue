import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

/**
 * Factory function for creating new routers
 * with each request
 *
 * @returns { VueRouter }
 */
function createRouter() {
  var routes = [
    { path: '/', component: () => import('./components/products.vue') },
    { path: '/login', component: () => import('./components/login.vue') },
    { path: '/products', component: () => import('./components/products.vue') },
    { path: '*', redirect: '/' }
  ];

  return new VueRouter({
    mode: 'history',
    routes,
  });
}


export default createRouter;
