import Vue from 'vue';
import app from './components/app';
import router from './router';

/**
 * Export a factory function for creating fresh app,
 * router and store instances
 * 
 * @export { function }
 * @returns { Vue } new fresh app
 */
export function createApp() {
  var rootInstance = new Vue({
    el: '#app',
    router,
    render: h => h(app)
  });

  return rootInstance;
};