import Vue from 'vue';
import app from './components/app.vue';
import createRouter from './router.es6';

/**
 * Export a factory function for creating fresh app,
 * router and store instances
 *
 * @export { function }
 * @returns { Vue } new fresh app
 */
export function createApp() {
  var router = createRouter();
  var rootInstance = new Vue({
    el: '#app',
    router,
    render: h => h(app)
  });

  return { app: rootInstance, router };
};
