import { createApp } from './app'

export default context => {
  return new Promise((resolve, reject) => {
    let { app, router } = createApp();

    // Set server-side router's location
    router.push(context.url);

    // Wait until router has resolved possible async components and hooks
    router.
      onReady(() => {
        const matchedComponents = router.getMatchedComponents();

        // No matched routes, reject with 404
        if (!matchedComponents.length) {
          return reject({ code: 404 })
        }

        // The Promise should resolve to the app instance so it can be rendered
        resolve(app);
      }, reject);
  });
};
