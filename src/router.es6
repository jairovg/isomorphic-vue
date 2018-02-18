import Vue from 'vue';
import VueRouter from 'vue-router';
import products from './components/products';

Vue.use(VueRouter);

let routes = [
  { path: '/', component: products },
  { path: '/products', component: products },
  { path: '*', redirect: '/' }
];

let router = new VueRouter({ routes });

export default router;